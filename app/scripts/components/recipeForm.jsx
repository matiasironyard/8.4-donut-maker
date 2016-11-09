console.log('hello add form');
var React = require('react');
var Backbone = require('backbone');

var models = require('../models/recipe');


var FormIngredientsList = React.createClass({
  getInitialState: function(){
    return this.props.ingredient.toJSON();
  },
  componentWillReceiveProps: function(newProps){
    this.setState(newProps.ingredient.toJSON());
  },
  handleInputChange: function(e){
    var targe = e.target;
    var newState = {};
    newState[target.name] = target.value;
    this.props.ingredient.set(target.name, target.value);
    this.setState(newState);
  },
  render: function(){
    return(
      <div>
        <div className="form-group">
          <label className="sr-only" htmlFor="ingredient-amount">Amount</label>
          <input onChange={this.handleInputChange} type="text" name="amount" value={this.state.amount}
          className="form-control" id="ingredient-amount" placeholder="Amount"/>
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="ingredient-units">Units</label>
          <input onChange={this.handleInputChange} type="text" name="units" value={this.state.units} className="form-control" id="ingredient-units" placeholder="Units"/>
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="ingredient-method">Method</label>
          <input onChange={this.handleInputChange} type="text" name="method" value={this.state.method} className="form-control" id="ingredient-method" placeholder="Method"/>
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="ingredient-name">Name</label>
          <input onChange={this.handleInputChange} type="text" name="name" value={this.state.name} className="form-control" id="ingredient-name" placeholder="Name"/>
        </div>
      </div>
    )
  }
});

var Form = React.createClass ({
  getInitialState: function(){
    return this.props.ingredient.toJSON();
  },

componentWillReceiveProps: function(newProps){
  this.setState(newProps.recipe.toJSON());
},

handleInputChange: function(e){
  var target = e.target;
  var newState = {};
  newState[target.name]  = target.value;
  this.setState(newState);
},

handleSubmit: function(e){
  e.preventDefault();
  this.props.saveRecipe(this.state);
},

render: function(){
  var recipe = this.props.recipe;
  var heading = recipe.isNew() ? 'Edd' : 'Edit';
  var ingredientFormset = recipe.get('ingredients').map(function(ingredient){
    return (
      <FormIngredientsList key={ingredient.cid} ingredient={ingredient}/>
    )
  });

  return (
    <form className="form-inline">
      <h3>{heading} Awesomness!</h3>
      <div className="form-group">
        <label htmlFor="recipe-name">Recipe Name</label>
        <input onChange={this.handleInputChange} value={this.state.name} name="name" type="text" className="form-control" id="recipe-name" placeholder="Rum Donut"/>
      </div>
      <div className="form-group">
        <label htmlFor="recipe-servings">Makes</label>
        <input  onChange={this.handleInputChange} value={this.state.servings} name="servings" type="text" className="form-control" id="recipe-servings" placeholder="# of servings"/>
      </div>
      <h4>List Of Ingredients</h4>

      <div className="form-inLine">
          //list of Ingredients
          {ingredientFormset}
      </div>

      <button type="button" onClick = {this.props.addIngredient} className = "btn btn-primary">Add Another Ingredient</button>
      <textarea className="form-control" id="recipe-instructions" rows="5"></textarea>
      <button type="submit" className="btn btn-success">Save Recipe</button>
    </form>
  );
}
});


var AddEditRecipeContainer = React.createClass({
  getInitialState: function(){
    return{
      recipe: new models.Recipe()
    };
  },

  componentWillMount: function(){
    this.getRecipe();
  },

  componentWillReceiveProps: function(){
    this.getRecipe();
  },

  getRecipe: function(){
    var recipe = this.state.recipe,
    recipeId = this.props.recipeId;
    if(!recipeId){
      return;
    }

    recipe.set('objectId', recipeId);
    recipe.fetch().then(()=> {
      this.setState({recipe: recipe});
    });
  },

  addIngredient: function(){
    var recipe = this.state.recipe;
    var ingredients = recipe.get('ingredients');
    ingredients.add([{}]);
    this.setState({recipe: recipe})
  },

  saveRecipe: function(recipeData){
    var recipe = this.state.recipe;
    recipe.set(recipeData);
    recipe.save().then(()=>{
      Backbone.history.navigate('recipes/' + recipe.get('objectId') + '/', {trigger: true});
    });
  },

  render: function(){
    return (
      <div>
        <form recipe={this.state.recipe} saveRecipe={this.saveRecipe} addIngredient={this.addIngredient}/>
      </div>
    )
  }
});
module.exports = {
  AddEditRecipeContainer: AddEditRecipeContainer
};
