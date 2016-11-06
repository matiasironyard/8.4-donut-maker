var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var AdjustRecipe = require('./components/AdjustRecipe.jsx').AdjustRecipe;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'add-recipe/': 'addRecipe',
    'view-recipes/': 'viewRecipes',
    'edit-recipe': 'editRecipe',
  },

  index: function(){
    ReactDOM.render(
      React.createElement(AdjustRecipe),
      //testing AdjustRecipe here. will move it to editRecipe.
      document.getElementById('app')
    );
  },

//   editRecipe: function(){
//     ReactDOM.render(
//       React.createElement(AdjustRecipe),
//       document.getElementById('app')
//     );
//   },
//
//   addRecipe: function(){
//     ReactDOM.render(
//       React.createElement(AddRecipe),
//       document.getElementById('app')
//     );
//   },
//
//   viewRecipes: function(){
//     ReactDOM.render(
//       React.createElement(ViewRecipes),
//       document.getElementById('app')
//     );
//   },
});

var router = new AppRouter();

module.export = router;
