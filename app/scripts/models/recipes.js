var Backbone = require('backbone');

var Recipe = Backbone.Model.extend({

});

var RecipesCollection = Backbone.Collection.extend({
  model: Recipe
});

module.exports = {
  Recipe: Recipe,
  RecipesCollection: RecipesCollection,
};
