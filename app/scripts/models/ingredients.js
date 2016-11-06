var Backbone = require('backbone');

var Ingredient = Backbone.Model.extend({
  idAttribute: 'objectId',

});

var ingredientsCollection = Backbone.Collection.extend({
  model: Ingredient
  url: 'https://matias-recipe.herokuapp.com/Classes/Ingredients',
});

module.exports = {
  Ingredient: Ingredient,
  ingredientsCollection: ingredientsCollection,
};
