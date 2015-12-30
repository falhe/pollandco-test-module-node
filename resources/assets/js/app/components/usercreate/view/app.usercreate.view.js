/*
    Template: Create user
    url: admin/createuser
    Controller: SearchuserController@store
*/

var Backbone = require('backbone'),
    _ = require('underscore'),
    userModel = require('../model/app.usercreate.model'),
    createUserViewTemplate = require('../template/app.usercreate.hbs'),
    serializeJSON = require('jquery-serializejson'),
    moment = require('moment'),
    Radio = require('backbone.radio');

// create a channel to listen to events on
// like backbone-mediator but in better
var createUserChannel = Radio.channel('createUser');

var createuserView = Backbone.View.extend({

    el: '#content-main',

    template: createUserViewTemplate,

    type: 'createuser_view',

    model: new userModel(),

    events: {
        'submit #form-user-update': 'submit'
    },

    initialize: function() {
        console.log(this);
        _.bindAll(this, 'render', 'submit', 'userCreated');

        this.listenTo(createUserChannel, 'show:userCreated', this.userCreated);
        this.render();
    },

    render: function() {
        var compiledTemplate = this.template(this.model.toJSON());
        this.$el.html(compiledTemplate);
        return this;
    },

    submit: function(e){
        e.preventDefault();
        var data = this.$el.find('#form-user-update').serializeJSON();
        this.model.set(data);
        this.model.save({}, {
            success: function(data){
                console.log('success', data);
                createUserChannel.trigger('show:userCreated');
            },
            error: function(data, textStatus, jqXHR){
                console.log('error', data);
                console.log('jqXHR', jqXHR);
                console.log('textStatus', textStatus);
            }
        });
    },

    userCreated: function(){
        var message = "L'utilisateur a bien été créé ! :)";
        this.$el.find('.flash-message').removeClass('hide').html(message);
        console.log('show:userCreated');
    }
});

module.exports = createuserView;