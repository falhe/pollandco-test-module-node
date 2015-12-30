/*
    Template: Edit user
    url: admin/editteuser
    Controller: SearchuserController@update
*/

var Backbone = require('backbone'),
    _ = require('underscore'),
    UserEditTemplate = require('../template/app.useredit.hbs'),
    userModel = require('../../usercreate/model/app.usercreate.model'),
    serializeJSON = require('jquery-serializejson'),
    Radio = require('backbone.radio');

var editUserChannel = Radio.channel('createUser');

var editUserView = Backbone.View.extend({

    el: '#content-main',

    template: UserEditTemplate,

    events: {
        'submit #form-user-update': 'updateUser'
    },

    initialize: function(options) {
        console.log('[Edit user]:init');

        this.id = options.id;
        _.bindAll(this, 'render', 'updateUser', 'userEdited');

        //set model then fetch to have good datas
        this.model = new userModel({
            id: this.id
        });
        this.model.fetch();

        this.listenTo(this.model, 'change', this.render);

        this.listenTo(editUserChannel, 'show:userEdited', this.userEdited);
    },

    render: function() {
        var html = this.template(this.model.toJSON());
        this.$el.html(html);
    },

    updateUser: function(e) {
        e.preventDefault();
        var data = this.$el.find('#form-user-update').serializeJSON();
        this.model.set(data);
        this.model.save({}, {
            success: function(data) {
                console.log('success', data);
                editUserChannel.trigger('show:userEdited');
            },
            error: function(data, jqXHR, textStatus) {
                console.log('error', data);
                console.log('jqXHR', jqXHR);
                console.log('textStatus', textStatus);
            }
        });
    },

    userEdited: function() {
        var message = "L'utilisateur a bien été mis à jour";
        this.$el.find('.flash-message').removeClass('hide').html(message);
    }
});

module.exports = editUserView;