var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

//bring in components
var setupParse= require('./parseUtilities').setupParse;
var AdjustRecipeContainer = require('./components/AdjustRecipe.jsx').AdjustRecipeContainer;
var AllRecipesContainer = require('./components/allRecipes.jsx').AllRecipesContainer;
var SingleRecipeContainer = require('./components/singleRecipeView.jsx').SingleRecipeContainer;
var AddEditRecipeContainer = require('./components/recipeForm.jsx').AddEditRecipeContainer;
var LoginContainer=require('./components/login.jsx').LoginContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'recipes/add/': 'editAddRecipe',
    'recipes/:id/edit/': 'editAddRecipe',
    'recipes/:id/' : 'singleRecipeView',
    'recipes/' : 'allRecipes',
  },

  initialize: function(){
    setupParse('matiasrecipeserver', 'recipe');
  },

  index: function(){
    ReactDOM.render(
      React.createElement(LoginContainer, {router: this}),
      document.getElementById('app')
    );
  },

  editAddRecipe: function(recipeId){
    ReactDOM.render(
      React.createElement(AddEditRecipeContainer, {recipeId: recipeId}),
      document.getElementById('app')
    );
  },

  singleRecipeView: function(recipeId){
    console.log('singleRecipeView');
    ReactDOM.render(
      React.createElement(SingleRecipeContainer, {recipeId: recipeId}),
      document.getElementById('app')
    );
  },

  allRecipes: function(){

    ReactDOM.render(
      React.createElement(AllRecipesContainer),
      document.getElementById('app')
    );
  },
});

var router = new AppRouter();

module.exports = router;
