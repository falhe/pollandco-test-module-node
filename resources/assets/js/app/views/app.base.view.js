var Backbone = require('backbone'),
    _ = require('underscore');

var BaseView = Backbone.View.extend({

    el: 'body',

    type: 'base_view',

    events: {
    },

    initialize: function() {
        console.log(this);
        _.bindAll(this, 'render', 'publish');
    },

    render: function() {
    },

    publish: function(){
        console.log(this);
    }
});

module.exports = BaseView;