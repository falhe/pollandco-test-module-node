var Backbone = require('backbone'),
    _ = require('underscore'),
    UserList = require('../collections/app.searchusers.collection'),
    UserItemView = require('./app.searchuser.view');


var BookListView = Backbone.View.extend({
    el: '#search-users-list',

    collection: new UserList(),

    initialize: function() { 
        _.bindAll(this, 'render', 'processUser');
        this.collection.fetch({
            success: this.render
        });
    },

    render: function() {
        _.each(this.collection.models, this.processUser, this);
        return this;
    },

    //Each User instanciate a new user's view
    processUser: function(user) {
        var childUserItemView = new UserItemView({
            model: user
        });
        childUserItemView.render();
        this.$el.append(childUserItemView.el);
    }
});

module.exports = BookListView;