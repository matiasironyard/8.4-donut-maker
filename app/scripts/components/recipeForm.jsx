// console.log('hello add form');
var React = require('react');
var Backbone = require('backbone');
var ReactQuill = require('react-quill');

// var trumbowyg = require('react-trumbowyg');

var models = require('../models/recipe');
var Template = require('../templates/templates.jsx');


var FormIngredientsList = React.createClass({
  getInitialState: function(){

    return this.props.ingredient.toJSON();
  },
  componentWillReceiveProps: function(newProps){
    this.setState(newProps.ingredient.toJSON());
  },
  handleInputChange: function(e){
    var target = e.target;
    console.log('target', target);
    var newState = {};
    newState[target.name] = target.value;
    this.setState(newState);
    this.props.ingredient.set(target.name, target.value);

  },
  render: function(){
    return(
      <div classNam="col-md-12">
        <div className="form-group">
          <label className="sr-only" htmlFor="ingredient-amount">Amount</label>
          <input onChange={this.handleInputChange} type="text" name="amount" value={this.state.amount}
          className="form-control" id="ingredient-amount" placeholder="Amount"/>
        </div>
        <select className="form-control" onChange={this.handleInputChange} type="text" name="units" value={this.state.units} className="form-control" id="ingredient-units" placeholder="Units">
              <option >Tbs</option>
              <option>Tsp</option>
              <option>oz.</option>
              <option>lb.</option>
              <option>fl.oz.</option>
              <option>c</option>
              <option>pt.</option>
              <option>qt.</option>
              <option>gal.</option>
              <option>doz.</option>
              <option>pkg.</option>
              <option>sm.</option>
              <option>med.</option>
              <option>lg.</option>
              <option>sq.</option>
              <option>approx.</option>
              <option>min.</option>
        </select>

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
    return this.props.recipe.toJSON();
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

handleServings: function(e){
  var value = e.target.value;
  var servings = parseInt(value);
  console.log('servings', servings);
  this.setState({servings: servings})
},

handleSubmit: function(e){
  e.preventDefault();
  this.props.saveRecipe(this.state);
},
handleDelete: function(){
  var self = this;
  var recipe = self.props.recipe;
  console.log(this.props);
    this.props.deleteRecipe(recipe);
    this.setState({recipe: recipe})
  },
render: function(){
  var recipe = this.props.recipe;

  var heading = recipe.isNew() ? 'Add' : 'Edit';
  var name = this.props.recipe.get('name');

  var ingredientFormset = recipe.get('ingredients').map(function(ingredient){
    return (
      <div><FormIngredientsList key={ingredient.cid} ingredient={ingredient} />
      </div>

    )
  });

  return (
    <form onSubmit={this.handleSubmit} className="form-inline col-md-8 col-md-offset-2 recipe-form">
      <h3 className="form-header">{heading} Recipe</h3>
      <h4 className="form-subheader">{name}</h4>
      <div className="form-group">
        <label htmlFor="form-heading recipe-name">Recipe Name</label>
        <input autoFocus onChange={this.handleInputChange} value={this.state.name} name="name" type="text" className="form-control" id="recipe-name" placeholder="Rum Donut"/>
      </div>
      <div className="form-group">
        <label htmlFor="form-heading recipe-servings">Makes</label>
        <input  onChange={this.handleServings} value={this.state.servings} name="servings" type="number" className="form-control" id="recipe-servings" placeholder="# of servings"/>
      </div>
      <div className="form-ingredient-list col-md-10">
        <h4 ingredients-header>Recipe Ingredients</h4>
        <p>Enter Ingredients Below</p>
        <div className="form-inLine">
            {ingredientFormset}
            <div>
              <span type="button" onClick = {this.props.addIngredient} className = "glyphicon glyphicon-plus"></span>
              <span type="button" onClick = {this.props.removeIngredients} className = "glyphicon glyphicon-minus">-</span>
            </div>
        </div>
        <div className="col-md-12">
              <textarea onChange={this.handleInputChange} value={this.state.instructions} name="instructions" className="form-control instructions" id="recipe-instructions"  placeholder="Instructions"></textarea>
        </div>
      </div>

     <div className="form-buttons col-md-12">
       <button type="submit" className="btn btn-success">Save Recipe</button>
      </div>
    </form>
  );
}
});


var AddEditRecipeContainer = React.createClass({
  getInitialState: function(){
    return{
      recipe: new models.Recipe(),
    };
  },

  componentWillMount: function(){
    this.getRecipe();
  },

  componentWillReceiveProps: function(){
    this.getRecipe();
  },

  getRecipe: function(){
    console.log(this.state.recipe);
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
    console.log('ingredients @ form', ingredients);
    ingredients.add([{}]);
    this.setState({recipe: recipe})
  },

  removeIngredients: function(){
    var recipe = this.state.recipe;
    var ingredients = recipe.get('ingredients');
    console.log('ingredients @ form', ingredients);
    ingredients.pop([{}]);
    this.setState({recipe: recipe})
  },

  saveRecipe: function(recipeData){
    var recipe = this.state.recipe;
    console.log('recipe @ save form', recipe);
    recipe.set(recipeData);
    recipe.save().then(()=>{
      Backbone.history.navigate('recipes/' + recipe.get('objectId') + '/', {trigger: true});
    });
  },

  render: function(){
    return (
      <Template>
        <Form recipe={this.state.recipe} saveRecipe={this.saveRecipe} ingredients={this.state.recipe.get('ingredients')} addIngredient={this.addIngredient} removeIngredients={this.removeIngredients}/>
      </Template>
    )
  }
});
module.exports = {
  AddEditRecipeContainer: AddEditRecipeContainer
};
