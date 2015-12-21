var Backbone = require('backbone'),
    _ = require('underscore'),
    UserTemplate = require('../template/app.useritem.hbs');

var UserView = Backbone.View.extend({

    template: UserTemplate,

    tagName: 'div',

    events: {
        'click span': 'whatisthat',
        'click .edit': 'edit',
        'click .delete': 'delete'
    },

    initialize: function() {
        console.log('[Single User item]:init');
        _.bindAll(this, 'render');
    },

    render: function() {
        var html = this.template(this.model.toJSON());
        this.$el.html(html);
    },

    whatisthat: function(){
        console.log(this);
    },

    edit: function(user){
        console.log("edit user ", this);
        app.router.navigate( "user/" + this.model.get('id'), {trigger: true});
    },

    delete: function(){
        console.log("delete user ", this);
        this.model.destroy();
    }
});

module.exports = UserView;