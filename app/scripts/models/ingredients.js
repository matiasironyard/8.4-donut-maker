var Backbone = require('backbone');

var Ingredient = Backbone.Model.extend({

});

var ingredientsCollection = Backbone.Collection.extend({
  model: Ingredient
});

module.exports = {
  Ingredient: Ingredient,
  ingredientsCollection: ingredientsCollection,
};
