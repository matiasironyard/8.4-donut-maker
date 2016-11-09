var React = require('react');

var models = require('../models/recipe');
var Template = require('../templates/templates.jsx');


var AdjustRecipeForm = React.createClass({
  getInitialState: function(){
    return {
      servings: 1
    };
  },
componentWillReceiveProps: function(nextProps){
  this.setState({servings: nextProps.servings});
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
        <form onSubmit = {this.handleSubmit} className="form-inline">
          <div className="form-group">
            <label htmlFor="servings">Servings</label>
            <input onChange={this.handleServings} value={this.state.servings} type="text" className="form-control" id="original-servings" placeholder="original servings"/>
          </div>
        </form>

    )
  }
});


var IngredientsList = React.createClass({
  render: function(){
    var factor = this.props.factor;
    var ingredientListItems =
    this.props.ingredients.map(function(ingredient){
      var newAmount = ingredient.get('amount') * factor;
      var amount = parseInt(newAmount) === newAmount ? newAmount : newAmount.toFixed(2);
      return (

            <li key={ingredient.cid} className="ingredients-li">
              <input type="checkbox"/> {amount} {ingredient.get('units')} {ingredient.get('name')}
            </li>
      );
    });
    return (
      <div className="ingredients-view">
        <ul className="ingredients-ul">
          {ingredientListItems}
        </ul>
      </div>
    );
  }
});



var AdjustRecipeContainer = React.createClass({
  getInitialState: function(){

    return {
      factor: 1,
      servings: 0
    };
  },

  componentWillReceiveProps: function(nextProps){
  this.setState({servings: nextProps.recipe.get('servings')});
},

  adjustServings: function(newServings){
    var recipe = this.props.recipe;
    var formFactor = (newServings/recipe.get('servings')) || 1;
    this.setState({servings: newServings, factor: formFactor});
  },

  render: function(){
    var ingredients = this.props.recipe.get('ingredients');
    return(
      <Template>
        <div className="col-md-6">
            <AdjustRecipeForm servings={this.state.servings} adjustServings={this.adjustServings}/>
            <IngredientsList factor={this.state.factor} ingredients={ingredients} />
        </div>
      </Template>
    );
  }
});
module.exports = {
  AdjustRecipeContainer: AdjustRecipeContainer
};
