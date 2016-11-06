var Backbone = require('backbone');

var Recipe = Backbone.Model.extend({
  idAttribute: 'objectId',
  //set up recipe: defaults and methods to update servings/ingredient amount.
  defaults: {
    title: "Your Recipe Title",
    qty: 1,
    qtyMeasurement: 'imperial',
    ingredients: []
  },
  ConversionFactor: function(newQty){
    //pass in newQty param from AdjustRecipeContainer...
    var orgQty = this.get('qty');
    this.updatedQtys(newQty/orgQty);
    //set the ConversionFactor by taking the qty(orgQty) and setting it to newQty
    this.set('qty', newQty)
  },

 updateQtys: function(){
   //
 },


});

var RecipesCollection = Backbone.Collection.extend({
  model: Recipe,
  url: 'https://matias-recipe.herokuapp.com/Classes/Recipes',
});

module.exports = {
  Recipe: Recipe,
  RecipesCollection: RecipesCollection,
};
