var Backbone = require('backbone'),
    _ = require('underscore');

var tototo = Backbone.View.extend({

    el: 'body',

    type: 'base_view',

    events: {
    },

    initialize: function() {
        console.log(this , 'toto view');
        _.bindAll(this, 'render', 'publish');
    },

    render: function() {
    },

    publish: function(){
        console.log(this);
    }
});

module.exports = tototo;