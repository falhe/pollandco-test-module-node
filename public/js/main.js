//require('../static/style.scss');

// var $ = require('jquery-untouched');
// var Backbone = require('backbone');
// Backbone.$ = $;

// console.log(Backbone.VERSION);

// var Index = require('./app/views/index');

// Index();

// console.log('sass compilé qsdndqsjhbqsdfsdfdssdfqjhqd');
// console.log('toto et tata blaaaa dsnjksnjknjdkq 12324 totototototo');


var $ = require('jquery'),
    Backbone = require('backbone'),
    Controller = require('./app/controllers/app.controller'),
    SearchUsersCollection = require('./app/collections/app.searchusers.collection');
    SearchUsersListView = require('./app/views/app.searchusers-list.view');
    // PubSub = require('./pubsub'),
    // Controller = require('./controllers/app.controller'),
    // BookListView = require('./views/app.book-list.view'),
    // PanierListView = require('./views/app.panier-list.view'),
    // PrixPanierView = require('./views/app.prix-panier.view');


(function(window, $, undefined) {
    if (window.__backboneAgent) {
        window.__backboneAgent.handleBackbone(Backbone);
    }

    var app = window.app = window.app || {};

    console.log("[Main:init] initialize du main.js");

    // INSTANTIATE COLLECTION
    //app.SearchUsersCollection = new SearchUsersCollection();

    app.controller = Controller;
    app.toto = "toto";
    app.lulu = function(){
        console.log('lulu');
    };
    console.log('toto');

    // //INSTANTIATE VIEWS
    app.SearchUsersList = new SearchUsersListView();
    // app.bookListView = new BookListView();
    // app.panierListView = new PanierListView();
    // app.prixPanierView = new PrixPanierView();

})(window, $);