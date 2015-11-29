var _ = require('underscore');

var Controller = (function() {
    var controller = {};

    var registerEvents = _.bind(function() {
        console.log('registerEvents', this);
        // app.mediator.subscribe("maSelection: Views.maSelection: displayMaSelection", display);
        // app.mediator.subscribe("mesAlertes: Views.mesAlertes: Success", success);
    }, controller);

    /**
     * [init mesAlertes]
     */
    controller.init = function() {
        console.log("[Controller:init] initialisation de l'application POLLSTAR");
        registerEvents();
    };

    return controller;
})();

module.exports = Controller;