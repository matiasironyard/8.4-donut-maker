var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

//bring in components
var AdjustRecipeContainer = require('./components/AdjustRecipe.jsx').AdjustRecipeContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'recipes/' : 'allRecipes',
    'recipes/:id/' : 'singleRecipeView',
    'recipes/:id/edit': 'editRecipe',
    'recipes/add': 'editRecipe',
  },

  index: function(){
    ReactDOM.render(
      React.createElement(LogInContainer),
      document.getElementById('app')
    );
  },

  recipeAddEdit: function(){
    ReactDOM.render(
      React.createElement(???, {recipeId: recipeId}),
      document.getElementById('app')
    );
  },

  singleRecipeView: function(){
    ReactDOM.render(
      React.createElement(???, {recipeId: recipeId}),
      document.getElementById('app')
    );
  },

  allRecipes: function(){
    ReactDOM.render(
      React.createElement(???, {recipeId: recipeId} ),
      document.getElementById('app')
    );
  },
});

var router = new AppRouter();

module.export = router;
