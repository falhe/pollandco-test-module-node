/*
    Template: List of all users
    url: admin/listuser
*/

var Backbone = require('backbone'),
    _ = require('underscore');
var userModel = require('../model/app.createuser.model');
var createUserViewTemplate = require('../template/app.listuser.hbs');

var createuserView = Backbone.View.extend({

    el: '#content-main',

    template: createUserViewTemplate,

    type: 'createuser_view',

    model: new userModel(),

    events: {

    },

    initialize: function() {
        console.log(this);
        _.bindAll(this, 'render');
        this.$el.empty();
        this.render();
    },

    render: function() {
        var compiledTemplate = this.template(this.model.toJSON());
        this.$el.html(compiledTemplate);
        return this;
    }
});

module.exports = createuserView;