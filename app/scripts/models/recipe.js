var Backbone = require('backbone');

//setup Parse models
/**
*Parse Model and Collection
*/

var ParseModel = Backbone.Model.extend({
  idAttribute: 'objectId',
  save: function (key, val, options){
    //delete the following so that we don't get a mismatch error when posting.
    delete this.attributes.createdAt;
    delete this.attributes.updatedAt;
    //return the model back to its original state since we have overloaded per above.
    return Backbone.Model.prototype.save.apply(this, arguments);
  }
});

var ParseCollection = Backbone.Collection.extend({
  whereClause: {field: '', className: '', objectId: ''},
  //set up a 'parseWhere' method in order to successfully post to Parse server. See docs @ https://parseplatform.github.io/docs/rest/guide/#relational-queries
  parseWhere: function(field, className, objectId){
    this.whereClause = {
      field: field,
      className: className,
      objectId: objectId,
      '__type': 'Pointer'
    };
    return this;
  },
  url: function(){
    var url = this.baseUrl;

    if(this.whereClause.field){
          var field = this.whereClause.field;
          delete this.whereClause.field;
          url += '?where={"' + field + '":' + JSON.stringify(this.whereClause) + '}';
        }

    return url;
  },
  parse: function(data){
    return data.results;
  }
});

/**
*Ingredient Model and Collection
*/

var Ingredient = ParseModel.extend ({
  defaults: {
    name: '',
    amount: 0,
    units: '',
  },
});

var IngredientCollection = ParseCollection.extend({
  model: Ingredient,
  baseUrl: 'https://matias-recipe.herokuapp.com/classes/Ingredient'
});

/**
*Recipe Model and Collection
*/

var Recipe = ParseModel.extend({
  defaults: {
    ingredients: new IngredientCollection()
  },
  urlRoot: 'https://matias-recipe.herokuapp.com/classes/Recipe',

  save: function(key, val, options){
    //Parse needs an array for the 'ingredients' column. Use toJSON to convert the colleciton to an array.
    this.set('ingredients', this.get('ingredients').toJSON());

//we overloaded the save method. reset it...
    return ParseModel.prototype.save.apply(this, arguments);
  },
  parse: function(data){
//In order to use the ingredients as a collection, set them back into a collection as below.
    data.ingredients = new IngredientCollection(data.ingredients);
    return data;
  }
});

var RecipeCollection = ParseCollection.extend({
  model: Recipe,
  url: 'https://matias-recipe.herokuapp.com/classes/Recipe'
});

module.exports = {
  Recipe: Recipe,
  RecipeCollection: RecipeCollection,
  Ingredient: Ingredient,
  IngredientCollection: IngredientCollection
};

// OLD SETUP   FOR WHEN I WANTED TO DO TO TABLES IN THE SERVER
// var Recipe = Backbone.Model.extend({
//   idAttribute: 'objectId',
//   //set up recipe: defaults and methods to update servings/ingredient amount.
//   defaults: {
//     objectId: '',
//     name: "Your Recipe Title",
//     qty: 1,
//     unit: 'imperial',
//     ingredients: []
//   },

//   ConversionFactor: function(newQty){
//     //pass in newQty param from AdjustRecipeContainer...
//     var orgQty = this.get('qty');
//     this.updatedQtys(newQty/orgQty);
//     //set the ConversionFactor by taking the qty(orgQty) and setting it to newQty
//     this.set('qty', newQty)
//   },
//
//  updateQtys: function(){
//    //Need to take ConversionFactor and map over ingredients to update amounts...
//  },
//
//
// });
//
// var RecipesCollection = Backbone.Collection.extend({
//   model: Recipe,
//   // url: 'https://matias-recipe.herokuapp.com/Classes/Recipe',
// });
//
// module.exports = {
//   Recipe: Recipe,
//   RecipesCollection: RecipesCollection,
// };
