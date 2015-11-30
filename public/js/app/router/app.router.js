var Backbone = require('backbone');

//FOR TEST
//TODO create rooter with real routes
var Router = Backbone.Router.extend({

    routes: {
        "help": "help", // #help
        "search/:query": "search", // #search/kiwis
        "search/:query/p:page": "search" // #search/kiwis/p7
    },

    help: function() {
        console.log("help");
    },

    search: function(query, page) {
        console.log("search");
    }

});

module.exports = Router;