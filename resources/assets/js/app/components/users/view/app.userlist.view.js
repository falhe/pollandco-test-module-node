/*
    Template: List of all users
    url: admin/listuser
*/

var Backbone = require('backbone'),
    _ = require('underscore'),
//    userModel = require('../model/app.createuser.model'),
    userItemView = require('./app.useritem.View'),
    UserList = require('../collection/app.createuser.collection');

var createuserView = Backbone.View.extend({

    el: '#content-main',

    type: 'createuser_view',

    collection: new UserList(),

    events: {

    },

    initialize: function() {
        console.log('[List of users]:init');
        _.bindAll(this, 'render', 'processUser');
        this.collection.fetch({
            success: this.render
        });
    },

    render: function() {
        _.each(this.collection.models, this.processUser, this);
        return this;
    },

    processUser: function(user){
        var childUserItem = new userItemView({
            model: user
        });
        childUserItem.render();
        this.$el.append(childUserItem.el);
    }
});

module.exports = createuserView;