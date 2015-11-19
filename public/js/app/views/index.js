var Backbone = require('backbone');

//var indexTemplate = require('templates/index.hbs');

var Index = Backbone.View.extend({

  //template: indexTemplate,

  render: function() {
    //this.$el.html(this.template());
    return this;
  }

});


var toto = function(){
    console.log('module index.js avec BROWSERIFY  !!!!!!!!!!!!!!');
}();

module.exports = toto;
