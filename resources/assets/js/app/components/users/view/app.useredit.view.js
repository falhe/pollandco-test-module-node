var Backbone = require('backbone'),
    _ = require('underscore'),
    UserTemplate = require('../template/app.useritem.hbs');

var editUserView = Backbone.View.extend({

    //template: UserTemplate,

    tagName: 'div',

    events: {
        'click span': 'whatisthat'
    },

    initialize: function() {
        console.log('[Edit user]:init');
        _.bindAll(this, 'render', 'whatisthat');
    },

    render: function() {
        //var html = this.template(this.model.toJSON());
        this.$el.html(html);
    },

    whatisthat: function(){
        console.log(this);
    },

    edit: function(user){
        console.log("edit", this);
    }
});

module.exports = editUserView;