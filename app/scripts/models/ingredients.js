var Backbone = require('backbone');

var Ingredient = Backbone.Model.extend({
  idAttribute: 'objectId',

});

var IngredientsCollection = Backbone.Collection.extend({
  model: Ingredient
  url: 'https://matias-recipe.herokuapp.com/Classes/Ingredients',
});

module.exports = {
  Ingredient: Ingredient,
  IngredientsCollection: IngredientsCollection,
};
var data = {
  "objectId": "hvjsf7q4", //id value from the db
  "name": "Recipe Name",
  "yeildName": "Recipe Name",
  "yeildQty": 1,
  "yeildMeasurement": 'imperial',
  "ingredients": [
    {
      "objectId": "fnjkw47e", // foreign key
      "name": "ingredient name",
      "measureUnit": "ounce",
      "measuerQty": 2
    },
    {
      "objectId": "fnjkw47e", // foreign key
      "name": "ingredient name",
      "measureUnit": "cup",
      "measuerQty": 2
    }
  ]
};
