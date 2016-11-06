var Backbone = require('backbone');

var Recipe = Backbone.Model.extend({
  idAttribute: 'objectId',

});

var RecipesCollection = Backbone.Collection.extend({
  model: Recipe,
  url: 'https://matias-recipe.herokuapp.com/Classes/Recipes',
});

module.exports = {
  Recipe: Recipe,
  RecipesCollection: RecipesCollection,
};
