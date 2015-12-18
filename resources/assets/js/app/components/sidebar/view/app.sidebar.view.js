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

    model: new sidebarModel(),

    events: {
        'click .tp': 'openSubmenu',
        'click a': 'navigationHandler'
    },

    initialize: function() {
        console.log('sidebar view ', this);
        _.bindAll(this, 'render', 'openSubmenu', 'navigationHandler');
        this.render();
    },

    render: function() {
        var compiledTemplate = this.template(this.model.toJSON());
        this.$el.html(compiledTemplate);
        return this;
    },

    openSubmenu: function(event) {
        event.preventDefault();
        $(event.currentTarget).find('.glyphicon').toggleClass('glyphicon-plus').toggleClass('glyphicon-minus');
        $(event.currentTarget).next('.submenu').toggleClass('hide');
    },

    navigationHandler: function(event) {
        event.preventDefault();
        var href = $(event.currentTarget).attr('href');
        if (href !== 'null') {
            app.router.navigate(href, {
                trigger: true
            });
        }
    }
});

module.exports = BaseView;