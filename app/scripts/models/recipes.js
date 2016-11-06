var Backbone = require('backbone');

var Recipe = Backbone.Model.extend({
  idAttribute: 'objectId',
  //set up recipe: defaults and methods to update servings/ingredient amount.

});

var RecipesCollection = Backbone.Collection.extend({
  model: Recipe,
  url: 'https://matias-recipe.herokuapp.com/Classes/Recipes',
});

module.exports = {
  Recipe: Recipe,
  RecipesCollection: RecipesCollection,
};
