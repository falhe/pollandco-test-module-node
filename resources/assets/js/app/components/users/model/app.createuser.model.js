var Backbone = require('backbone');

var User = Backbone.Model.extend({
    defaults: {
        'quantite'      : 1,
        'name'          : '',
        'email'         : '',
        'confirmed'     : 'false',
        'created_at'    : '',
        'updated_at'    : '',
        'firstname'     : 'prénom',
        'lastname'      : 'nom',
        'avatar'        : 'avatar.jpg',
        'birthday_date' : 'jj/mm/yyyy',
        'role'          : 'paneliste/administrator',
        'points'        : ''
    },

    urlRoot: rootPath + '/api/searchusers'
});

module.exports = User;