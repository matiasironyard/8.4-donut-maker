var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var modRecipeContainer = require('./components/calculate_recipe.jsx').modRecipeContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(modRecipeContainer),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.export = router;
