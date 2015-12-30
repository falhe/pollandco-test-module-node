var $ = require('jquery')(window),
    Backbone = require('backbone'),
    Controller = require('./app/controllers/app.controller'),
    Router = require('./app/router/app.router'),
    sidebarView = require('./app/components/sidebar/view/app.sidebar.view'),
    moment = require('moment');

(function(window, $, undefined) {
    if (window.__backboneAgent) {
        window.__backboneAgent.handleBackbone(Backbone);
    }

    var app = window.app = window.app || {};

    console.log("[Application Pollandco admin:init] initialiation main.js");

    app.router = new Router;
    app.controller = Controller;

    // Instantiate sidebar before the router
    // this way the sidebar is persistent in the app
    app.sidebar = new sidebarView();

    // Instantiate router
    // activate Pushstate
    // the root work well with virtual host (MAMP PRO)
    // need to test with real server
    Backbone.history.start({
        pushState: true,
        root: 'admin/' // TODO trouver un moyen d ameliorer ça pour que ça s'adapte à tous types d@,
    });

})(window, $);
