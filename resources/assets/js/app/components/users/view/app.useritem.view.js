var Backbone = require('backbone'),
    _ = require('underscore'),
    UserTemplate = require('../template/app.useritem.hbs');

var UserView = Backbone.View.extend({

    template: UserTemplate,

    tagName: 'tr',

    events: {
        'click span': 'publish'
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
    }
});

module.exports = UserView;