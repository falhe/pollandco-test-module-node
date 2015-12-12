/*
Model
*/
(function() {
	"use strict";

	window.app = {
		Model: {},
		Collection: {},
		View: {}
	};

	/*=======================================
	=            Backbone Models            =
	=======================================*/

	// Utilisateur Model
	app.Model.User = Backbone.Model.extend({
		defaults: {
			name: "nom de famille",
			prenom: "prénom",
			id: 1
		}

		//url: rootPath + '/searchusers'
	});

	app.Model.Points = Backbone.Model.extend({
		urlRoot: rootPath + '/api/points'
	});

	/*=====  End of Backbone Models  ======*/

	/*============================================
	=            Backbone Collections            =
	============================================*/

	// Collection de la liste des users recherché
	app.Collection.User = Backbone.Collection.extend({
		'model': app.Model.User,
		'url': rootPath + '/api/searchusers'
	});

	/*=====  End of Backbone Collections  ======*/


	/*======================================
	=            Backbone Views            =
	======================================*/

	/*
	 *   Vue Search Input for users [#form-search-users]
	 */
	app.View.SearchUserForm = Backbone.View.extend({

		el: '#form-search-users',

		events: {
			'submit .form-search-users': 'searchUser'
		},

		initialize: function() {
			_.bindAll(this, 'searchUser');
			console.log('init vue FormSearchUser');
		},

		searchUser: function(e) {
			e.preventDefault();
			var parameters = {
				name: this.$el.find('.search').val()
			};

			this.collection.fetch({
				data: {
					q: parameters.name
				},
				success: function(data) {
					Backbone.Mediator.publish('SearchUserForm:search', data);
				},
				error: function(data) {
					console.log('error', data);
				}
			});
		}

	});

	/*
	 *  Vue Item d un utilisateur
	 */
	app.View.SearchUserResult = Backbone.View.extend({

		tagName: 'tr',

		template: _.template($('#SearchUserResult').html()),

		events: {
			'click span.id': 'toto'
		},

		initialize: function() {
			console.log('SearchUserResult ITEM ');
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},

		toto: function(argument) {
			console.log(argument);
		},
	});

	/*
	 *   Vue de la liste des resultats
	 */
	app.View.SearchUserResults = Backbone.View.extend({

		el: '#search-users-list table',

		tagName: 'table',

		className: 'table table-striped',

		events: {
			//'submit .form-search-users': 'fetchlaCollection'
		},

		initialize: function() {
			console.log('initialize la vue liste des users recherché');
			this.listenTo(this.collection, 'change', this.render);
			Backbone.Mediator.subscribe('SearchUserForm:search', this.render, this);
		},

		render: function(data) {
			this.$el.empty();
			//boucle sur la collection
			data.each(function(model, index) {
				var item = new app.View.SearchUserResult({
					model: model
				});

				this.$el.append(item.render().el);

			}.bind(this));

			return this;
		}
	});

	/**
	 *
	 * Vue admin/gererpoints/{id}
	 * Ajouter/retirer des points
	 */
	app.View.HandlerPointsToUser = Backbone.View.extend({

		el: '.gerer-points',

		model: new app.Model.Points(),

		events: {
			'click a#add': 'addPoints',
			'click a#remove': 'removePoints'
		},

		initialize: function() {
			console.log('initialize vue HandlerPointsToUser');
		},

		addPoints: function(e) {
			e.preventDefault();

			var points = new app.Model.Points();
			points.set({
				id: userId,
				add_points: this.$el.find('#total_points').val()
			});
			points.save({
				wait: true
			}, {
				success: function(model, response) {
					console.log('save success', model, response);
				},
				error: function(model, error) {
					console.log('save error');
				}
			});
		},

		removePoints: function(e) {
			e.preventDefault();
			var points = new app.Model.Points();
			points.save({
				id: userId,
				remove_points: this.$el.find('#remove_points').val()
			}, {
				wait: true
			}, {
				success: function(model, response) {
					console.log('save success', model, response);
				},
				error: function(model, error) {
					console.log('save error');
				}
			});
		}
	});

	/*
	 *	Vue admin/gererpoints/{id}
	 * tableau des points
	 */
	app.View.RecapPoints = Backbone.View.extend({
		el: '#PointsHandler',

		template: _.template($('#PointsHandlerTemplate').html()),

		events: {
			'click a#add': 'addPoints',
			'click a#remove': 'removePoints'
		},

		initialize: function() {
			this.listenTo(this.model, 'change', this.render, this);
//			debugger;
			this.model.fetch();
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
		},

		addPoints: function(e) {
			e.preventDefault();

			this.model.urlRoot = rootPath + '/api/points';
			var points = parseInt(this.$el.find('#add_points').val(), 10);

			if (!isNaN(points) && points > 0) {
				this.model.set({
					total_points: this.model.get('total_points') + points
				});

				this.model.save({
					wait: true
				}, {
					success: function(model, response) {
						console.log(model, 'success save');
					},
					error: function(error, response) {
						console.log(error, response);
					}
				});
			}
		},

		removePoints: function(e) {
			e.preventDefault();

			this.model.urlRoot = rootPath + '/api/points/substraction';
			var points = parseInt(this.$el.find('#remove_points').val(), 10);

			if (!isNaN(points) && points > 0) {
				this.model.save({
					remove_points: parseInt(this.$el.find('#remove_points').val(), 10)
				}, {
					wait: true
				}, {
					success: function(model, response) {
						console.log('save success', model, response);
					},
					error: function(model, error) {
						console.log('save error');
					}
				});
			}
		}
	});


	/*=====  End of Backbone Views  ======*/

	var searchUserForm = new app.View.SearchUserForm({
		collection: new app.Collection.User()
	});
	var users = new app.View.SearchUserResults();
	var HandlerPointsToUser = new app.View.HandlerPointsToUser();
	var PointsHandlerTemplate = new app.View.RecapPoints({
		model: new app.Model.Points({
			id: userId
		})
	});

})();