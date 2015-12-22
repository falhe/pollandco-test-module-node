var Backbone = require("backbone"),
    UserModel = require("../model/app.createuser.model");

var SearchUsersCollection = Backbone.Collection.extend({

    model : UserModel,

    url: rootPath + '/api/searchusers'
});

module.exports = SearchUsersCollection;