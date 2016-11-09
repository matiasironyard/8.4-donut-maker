var React = require('react');

var recipes = require('../models/recipes');


var AdjustRecipe = React.createClass({
  getInitialState: function(){
    var recipeCollection = new recipes.RecipesCollection();
    console.log(recipeCollection);
    recipeCollection.add([
      {
        "title": "test-recipe",
        "servings": "10",
        "items": [
          {"amount": 3, "unit": "pounds", "ingredient": "avocado"},
          {"amount": 4, "unit": "whole", "ingredient": "eggs"},
          {"amount": 2, "unit": "table spoons", "ingredient": "salt"},
          {"amount": 1, "unit": "oz", "ingredient": "milk"}
        ]
      }
    ]);
    return {
      recipeCollection: recipeCollection
    }
  },


  render: function(){
    var self = this;
    var personalRecipe = self.state.recipeCollection.pop().toJSON();
    var servings = personalRecipe.servings;
    var Ingredients = personalRecipe['items'].map(function(item){
      var amount = item.amount;
      var unit = item.unit;
      var ingredient = item.ingredient;

      return(
        <li key={item.cid}><input type="checkbox"/><span>{amount}</span><span> {unit}</span><span> {ingredient}</span></li>
        );
    });
    return(
      <div>
        <form className="form-inline">
          <div className="form-group">
            <label className="header-span" htmlFor="exampleInputName2">Makes</label>
            <input onChange={this.handleMod} value={this.servings} type="text" className="form-control" id="servings" placeholder="#"></input>
            <span className="header-span">Servings</span>
          </div>
          <button type="submit" className="btn btn-default">Adjust</button>
        </form>
        {Ingredients}
      </div>
    );
  }
});

module.exports = {
  AdjustRecipe: AdjustRecipe
};
