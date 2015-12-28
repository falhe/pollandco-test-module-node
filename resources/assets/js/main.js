var $ = require('jquery')(window),
    Backbone = require('backbone'),
    Controller = require('./app/controllers/app.controller'),
    //SearchUsersCollection = require('./app/collections/app.searchusers.collection'),
    //SearchUsersListView = require('./app/views/app.searchusers-list.view'),
    Router = require('./app/router/app.router'),
    sidebarView = require('./app/components/sidebar/view/app.sidebar.view');

(function(window, $, undefined) {
    if (window.__backboneAgent) {
        window.__backboneAgent.handleBackbone(Backbone);
    }

    var app = window.app = window.app || {};

    console.log("[Main:init] initialize du main.js");

    app.router = new Router;
    app.controller = Controller;
    app.toto = "toto";
    app.lulu = function() {
        console.log('lulu');
    };

    // //INSTANTIATE VIEWS
    app.sidebar = new sidebarView();

    //Instantiate router
    Backbone.history.start({
        pushState: true,
        root: 'poll/public/admin/' // TODO trouver un moyen d ameliorer ça pour que ça s'adapte à tous types d@
    });

})(window, $);
