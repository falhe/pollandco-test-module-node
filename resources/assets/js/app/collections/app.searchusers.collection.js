var Backbone = require("backbone"),
    UserModel = require("../models/app.user.model");

var SearchUsersCollection = Backbone.Collection.extend({

    'model' : UserModel,

    'url'   : rootPath + '/api/searchusers'
});

module.exports = SearchUsersCollection;