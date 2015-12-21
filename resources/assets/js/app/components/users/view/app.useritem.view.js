var Backbone = require('backbone'),
    _ = require('underscore'),
    UserTemplate = require('../template/app.useritem.hbs');

var UserView = Backbone.View.extend({

    template: UserTemplate,

    tagName: 'div',

    events: {
        'click span': 'publish',
        'click .edit': 'edit',
        'click .delete': 'delete'
    },

    initialize: function() {
        _.bindAll(this, 'render');
    },

    render: function() {
        var html = this.template(this.model.toJSON());
        this.$el.html(html);
    },

    publish: function(){
        console.log(this);
    },

    edit: function(user){
        console.log("edit", this);
        debugger;
    },

    delete: function(){
        console.log("delete", this);
        debugger;
        //this.model.destroy();
    }
});

module.exports = UserView;