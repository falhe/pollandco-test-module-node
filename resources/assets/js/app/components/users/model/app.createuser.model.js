var Backbone = require('backbone'),
    moment = require('moment');

// date of creation of the user
var created_at = moment().format('YYYY-MM-D h:mm:ss');

var User = Backbone.Model.extend({
    defaults: {
        'quantite'      : 1,
        'name'          : '',
        'email'         : '',
        'confirmed'     : 'false',
        'created_at'    : created_at,
        'updated_at'    : created_at,
        'firstname'     : 'prénom',
        'lastname'      : 'nom',
        'gender'        : '1',
        'avatar'        : 'avatar.jpg',
        'birthday_date' : 'YYYY-MM-D',
        'role'          : '1',
        'points'        : '0'
    },

    urlRoot: rootPath + '/api/searchusers'
});

module.exports = User;