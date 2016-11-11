// console.log('hello adjust recipe');
var React = require('react');
var models = require('../models/recipe');
var Template = require('../templates/templates.jsx');
var Fraction = require('fractional').Fraction;


var AdjustRecipeForm = React.createClass({
  getInitialState: function(nextProps){
    return {
      servings: this.props.recipe.get('servings'),
      instructions: this.props.recipe.get('instructions'),
    };
},

componentWillReceiveProps: function(nextProps){
  this.setState({servings: nextProps.recipe.get('servings')});
},

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
    return(
      <div>
        <a href={'#recipes/' + this.props.recipe.get('objectId') + '/edit/'}><span className="edit-recipe glyphicon glyphicon-pencil"/></a>
        <form onSubmit = {this.handleSubmit} className="form-inline servings">
          <div className="form-group">
            <label htmlFor="servings">Servings </label>
            <input onChange={this.handleServings} value={this.state.servings} type="text" className="form-control" id="original-servings" placeholder="original servings"/>
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
          <p>{instructions}</p>
        </div>
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

    return(
      <div className="col-md-5 col-md-offset-2 calculator">
          <AdjustRecipeForm recipe={this.props.recipe} adjustServings={this.adjustServings} servings={this.props.recipe.get('servings')}/>
          <IngredientsList factor={this.state.factor} ingredients={ingredients} instructions={instructions}/>
      </div>
    );
  }
});
module.exports = {
  AdjustRecipeContainer: AdjustRecipeContainer
};
