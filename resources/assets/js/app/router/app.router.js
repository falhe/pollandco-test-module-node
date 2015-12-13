//"use strict";


(function() {
    'use strict';

    var $ = require('jquery');
    var Backbone = require('backbone');
    var _ = require('underscore');
    var baseView = require('../views/app.base.view');
    var searchUsersList = require('../views/app.searchusers-list.view');
    var searchUsers = require('../views/app.searchuser.view');
    var test = require('../views/app.toto.view');

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
            //"search/:query": "search", // #search/kiwis
            //"search/:query/p:page": "search", // #search/kiwis/p7
            //"gestion_points": "gestion_points",
            "dashboard/:id": "dashboard"
        },

        dashboard: function() {
            console.log('dashboard');
            var Aaa = new test();
            var Toto = new searchUsersList();
            console.log('aaa :', Aaa);
            debugger;
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
        }

    });

    module.exports = Router;
}());