/*
    Template: Sidebar - menu latéral
*/

var Backbone = require('backbone'),
    _ = require('underscore');
var sidebarView = require('../template/app.sidebar.hbs');
var sidebarModel = require('../model/app.sidebar.model');

var BaseView = Backbone.View.extend({

    el: '#sidebar-wrapper',

    template: sidebarView,

    type: 'sidebar_view',

    tagName: 'ul',

    className: 'nav og nav-stacked',

    model: new sidebarModel(),

    events: {
    },

    initialize: function() {
        console.log('sidebar view ', this);
        _.bindAll(this, 'render');
        this.render();
    },

    render: function() {
        var compiledTemplate = this.template(this.model.toJSON());
        this.$el.html(compiledTemplate);
    }
});

module.exports = BaseView;