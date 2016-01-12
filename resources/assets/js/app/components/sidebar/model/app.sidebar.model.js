var Backbone = require('backbone');

var User = Backbone.Model.extend({
    defaults: {
        'menu': [{
            'title': 'Gestion des utilisateurs',
            'link': 'null',
            'class': 'class',
            'submenu': [{
                'title': 'Liste de tous les utilisateurs',
                'link': 'listuser',
                'class': 'list'
            },{
                'title': 'Ajouter un Community manager',
                'link': 'createuser',
                'class': 'create'
            }, {
                'title': 'Rechercher un panéliste',
                'link': 'searchuser',
                'class': 'search'
            }]
        }]
    }
});

module.exports = User;