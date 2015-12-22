var Backbone = require('backbone'),
    _ = require('underscore'),
    UserEditTemplate = require('../template/app.useredit.hbs');
var userModel = require('../model/app.createuser.model');
var serializeJSON = require('jquery-serializejson');

var editUserView = Backbone.View.extend({

    el: '#content-main',

    template: UserEditTemplate,

    events: {
        'submit #form-user-update': 'updateUser'
    },

    initialize: function(options) {
        console.log('[Edit user]:init');

        this.id = options.id;
        _.bindAll(this, 'render', 'updateUser');

        //set model then fetch to have good datas
        this.model = new userModel({
            id: this.id
        });
        this.model.fetch();

        this.listenTo(this.model, 'change', this.render);

    },

    render: function() {
        //console.log(this.model.toJSON());
        var html = this.template(this.model.toJSON());
        this.$el.html(html);
    },

    updateUser: function(e){
        e.preventDefault();
        var data = this.$el.find('#form-user-update').serializeJSON();
        this.model.set(data);
        this.model.save();
    }
});

module.exports = editUserView;