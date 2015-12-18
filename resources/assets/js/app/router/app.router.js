var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
var baseView = require('../views/app.base.view');
var searchUsersList = require('../views/app.searchusers-list.view');
var searchUsers = require('../views/app.searchuser.view');
var test = require('../views/app.toto.view');
var sidebarView = require('../components/sidebar/view/app.sidebar.view');
var listuserView = require('../components/users/view/app.listuser.view');
var createuserView = require('../components/users/view/app.createuser.view');


//FOR TEST
//TODO create rooter with real routes
var Router = Backbone.Router.extend({

    whereami: null,

    initialize: function() {
        //_.bindAll(this, 'routes', 'dashboard');
        console.log("[Router]:init");
    },

    routes: {
        "help": "help", // #help
        "search/:query": "search", // #search/kiwis
        "search/:query/p:page": "search", // #search/kiwis/p7
        "gestion_points": "gestion_points",
        "dashboard/:id": "dashboard",
        "listuser": "listuser",
        "createuser": "createuser",
        "deleteuser": "deleteuser"
    },

    dashboard: function() {
        console.log('dashboard');
    },

    help: function() {
        console.log("help help");
        $('body').find('.contents content-wrapper').html('help');
    },

    search: function(query, page) {
        console.log("search");
    },

    gestion_points: function() {
        console.log("gestion_points");
    },

    listuser: function(){
        console.log('listuser');
        new listuserView();
    },

    createuser: function(){
        console.log('createuser');
        var createuser = new createuserView();
    },

    deleteuser: function(){
        console.log('deleteuser');
    }

});

module.exports = Router;