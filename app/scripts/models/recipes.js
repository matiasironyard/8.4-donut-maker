var Backbone = require('backbone');

var Recipe = Backbone.Model.extend({
  idAttribute: 'objectId',
  //set up recipe: defaults and methods to update servings/ingredient amount.
  defaults: {
    objectId: '',
    name: "Your Recipe Title",
    qty: 1,
    unit: 'imperial',
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
   //Need to take ConversionFactor and map over ingredients to update amounts...
 },


});

var RecipesCollection = Backbone.Collection.extend({
  model: Recipe,
  // url: 'https://matias-recipe.herokuapp.com/Classes/Recipe',
});

module.exports = {
  Recipe: Recipe,
  RecipesCollection: RecipesCollection,
};
