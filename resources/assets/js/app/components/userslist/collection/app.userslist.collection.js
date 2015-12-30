var Backbone = require("backbone"),
    UserModel = require("../../usercreate/model/app.usercreate.model");

var SearchUsersCollection = Backbone.Collection.extend({

    model : UserModel,

    url: rootPath + '/api/searchusers'
});

module.exports = SearchUsersCollection;