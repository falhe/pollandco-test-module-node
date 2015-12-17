var Backbone = require('backbone');

var User = Backbone.Model.extend({
    defaults: {
        'menu': [{
            'title': 'Utilisateur',
            'link': 'link',
            'class': 'class',
            'submenu': [{
                'title': 'Ajouter un Utilisateur',
                'link': 'link',
                'class': 'class'
            },{
                'title': 'Supprimer un Utilisateur',
                'link': 'link',
                'class': 'class'
            }]
        }, {
            'title': 'Administrateur',
            'class': 'class',
            'link': 'link',
        }]
    }
});

module.exports = User;