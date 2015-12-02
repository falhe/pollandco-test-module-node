var Backbone = require('backbone');

//FOR TEST
//TODO create rooter with real routes
var Router = Backbone.Router.extend({

    whereami: null,

    initialize: function(){
        console.log("[Router]:init");
    },

    routes: {
        "help": "help", // #help
        "search/:query": "search", // #search/kiwis
        "search/:query/p:page": "search", // #search/kiwis/p7
        "gestion_points": "gestion_points"
    },

    help: function() {
        debugger;
        console.log("help");
    },

    search: function(query, page) {
        console.log("search");
    },

    gestion_points: function(){
        console.log("gestion_points");
    }

});

module.exports = Router;