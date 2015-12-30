/*
    Template: List of all users
    url: admin/listuser
    Controller: SearchuserController@index
*/

var Backbone = require('backbone'),
    _ = require('underscore'),
    userItemView = require('./app.useritem.View'),
    UserList = require('../collection/app.createuser.collection');

var createuserView = Backbone.View.extend({

    el: '#content-main',

    type: 'createuser_view',

    table: '#users-list',

    collection: new UserList(),

    events: {
    },

    initialize: function() {
        console.log('[List of users]:init');
        this.$el.html('loading...');

        _.bindAll(this, 'render', 'processUser');

        if ( this.collection) {
            this.collection.fetch({ success: this.render });
            this.listenTo(this.collection, 'remove', this.render);
            this.listenTo(this.collection, 'add', this.add);
            this.listenTo(this.collection, 'reset', this.render);
        }
    },

    render: function() {
        this.$el.empty();
        // TODO improve how to display the table
        this.$el.append('<h1>Liste de tous les utilisateurs</h1>');
        this.$el.append('<table class="table table-striped table-hover table-condensed users-list" id="users-list">');
        _.each(this.collection.models, this.processUser, this);
        return this;
    },

    processUser: function(user){
        var childUserItem = new userItemView({
            model: user
        });
        childUserItem.render();
        $(this.table).append(childUserItem.el);
    }
});

module.exports = createuserView;