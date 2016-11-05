var Backbone = require('backbone');

var Recipe = Backbone.Model.extend({

});

var RecipiesCollection = Backbone.Collection.extend({
  model: Recipe
});

module.exports = {
  Recipe: Recipe,
  RecipiesCollection: RecipiesCollection,
};
