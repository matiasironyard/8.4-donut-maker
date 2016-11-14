// console.log('hello adjust recipe');
var React = require('react');
var models = require('../models/recipe');
var Template = require('../templates/templates.jsx');
var Fraction = require('fractional').Fraction;
// var RecipeHeader = React.createClass({
//   render: function(){
//     console.warn(this.props.methods.get('name'));
//     var name = this.props.methods.get('name');
//     return(
//       <div className="col-md-6 col-md-offset-2 single-view-header">
//         <h1 className="edit-recipe-header" ></h1>
//       </div>
//     );
//   }
// });

var AdjustRecipeForm = React.createClass({
  getInitialState: function(nextProps){
    return {
      servings: '',
      instructions: this.props.recipe.get('instructions'),
    };
},

// componentWillReceiveProps: function(nextProps){
//   this.setState({servings: nextProps.recipe.get('servings')});
//     // this.forceUpdate();
// },
//
// componentDidUpdate:function(){
//
// },


handleServings: function(e){
  //setState to track the changes in value
  this.setState({servings: e.target.value});
  this.props.adjustServings(e.target.value);
},

handleSubmit: function(e){
  e.preventDefault();
  this.props.adjustServings(this.state.servings);
},

  render:function(){
    var currentServings = this.props.recipe.get('servings') +' ' + '(adjust servings)';
    var name = this.props.recipe.get('name');
    return(
      <div>
        <div className="col-md-12  calculator-header">
          <h1 className="edit-recipe-header" >{name}</h1>
            <a href={'#recipes/' + this.props.recipe.get('objectId') + '/edit/'}><span className="edit-recipe glyphicon glyphicon-pencil"/></a>
        </div>
        <form onSubmit = {this.handleSubmit} className="form-inline servings">
          <div className="form-group">
            <label htmlFor="servings">Servings </label>
            <input onChange={this.handleServings} value={this.state.servings} type="text" className="form-control" id="original-servings" placeholder={currentServings}/>
          </div>
        </form>
      </div>

    )
  }
});

var IngredientsList = React.createClass({
  render: function(){
    var factor = this.props.factor;
    var instructions = this.props.instructions;
    var ingredientListItems =
    this.props.ingredients.map(function(ingredient){
      var newAmount = ingredient.get('amount') * factor;
      var amount = parseInt(newAmount) === newAmount ? newAmount : newAmount.toFixed(2);
      var f = new Fraction(amount).toString();
      // console.log(f);
      return (
            <tr key={ingredient.cid} className="ingredients-li">
              <td className="ingredient-details" >{f}</td>
              <td className="ingredient-details">{ingredient.get('units')}</td>
              <td classNae="ingredient-details">{ingredient.get('method')}</td>
              <td className="ingredient-details">{ingredient.get('name')}</td>
            </tr>
      );
    });
    return (
      <div className="ingredients-view">
        <table className="table">
          <thead>
            <tr>
              <th>Amount</th>
              <th>Units</th>
              <th>Method</th>
              <th>Ingredient</th>
            </tr>
          </thead>
          <tbody>
              {ingredientListItems}
          </tbody>
        </table>
        <div className="instructions">
          <h4>Instructions</h4>
          <p>{instructions}</p>
        </div>
      </div>
    );
  }
});

var CookingMethod  = React.createClass({
  render: function(){
    var cookTemp=this.props.methods.get('recipecooktemp');
    var prepTime=this.props.methods.get('recipepreptime');
    var cookingTime=this.props.methods.get('recipecooktime');
    var recipeType=this.props.methods.get('recipetype')
    return (
      <div className="ingredients-view">
        <table className="table">
          <thead>
            <tr>
              <th>Recipe Type</th>
              <th>Cooking Temperature</th>
              <th>Prep Time</th>
              <th>Cooking Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className="Recipe-methods-li">
              <td className="Recipe-methods" >{recipeType}</td>
              <td className="Recipe-methods" >{cookTemp}</td>
              <td className="Recipe-methods">{prepTime}</td>
              <td classNae="Recipe-methods">{cookingTime}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
});


var AdjustRecipeContainer = React.createClass({
  getInitialState: function(){
    return {
      factor: 1,
      // servings: this.props.recipe.get('servings')
    };
  },
//***
//By seting the servings in the form components, componentWillRecieveProps, to what we have in this block, we avoid having it to do it here.
//   componentWillReceiveProps: function(nextProps){
//   this.setState({servings: nextProps.recipe.get('servings')});
// },

  adjustServings: function(newServings){
    var recipe = this.props.recipe;
    var formFactor = (newServings/recipe.get('servings')) || 1;
    this.setState({factor: formFactor});
  },

  render: function(){
    var ingredients = this.props.recipe.get('ingredients');
    // console.warn(ingredients);
    var instructions = this.props.recipe.get('instructions');
    // console.log(instructions);
    var methods = this.props.recipe;

    return(
      <div className="col-md-7 col-md-offset-2 calculator">
        <AdjustRecipeForm recipe={this.props.recipe} adjustServings={this.adjustServings} servings={this.props.recipe.get('servings')}/>
        <CookingMethod methods={methods}/>
        <IngredientsList factor={this.state.factor} ingredients={ingredients} instructions={instructions}/>
      </div>
    );
  }
});
module.exports = {
  AdjustRecipeContainer: AdjustRecipeContainer
};
