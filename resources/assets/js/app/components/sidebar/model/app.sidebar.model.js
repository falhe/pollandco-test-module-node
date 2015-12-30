var Backbone = require('backbone');

var User = Backbone.Model.extend({
    defaults: {
        'menu': [{
            'title': 'Utilisateur',
            'link': 'null',
            'class': 'class',
            'submenu': [{
                'title': 'Liste de tous les Utilisateurs',
                'link': 'listuser',
                'class': 'list'
            },{
                'title': 'Ajouter un Utilisateur',
                'link': 'createuser',
                'class': 'create'
            }]
        }, {
            'title': 'Administrateur',
            'class': 'class',
            'link': 'link',
            'submenu': [{
                'title': 'Ajouter un admin',
                'link': 'createuser',
                'class': 'create'
            },{
                'title': 'Supprimer un admin',
                'link': 'deleteuser',
                'class': 'delete'
            }]
        }]
    }
});

module.exports = User;