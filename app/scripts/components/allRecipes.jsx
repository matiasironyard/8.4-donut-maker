var React = require('react');
var models = require('../models/recipe');
var Template = require('../templates/templates.jsx');

var ItemListing = React.createClass({
  handleDelete: function(){
    var self = this;
    var recipe = self.props.recipe;
    console.log(this.props);
      this.props.deleteRecipe(recipe);
      this.setState({recipe: recipe})
    },

  render: function(){
    var recipe = this.props.recipe;
    // console.log('allRecipes', recipe);
    return (
      <div className="recipe-list-items col-md-10">
        <a href={'#recipes/' + recipe.get('objectId') + '/'} className="list-group-item">{recipe.get('name')}</a>
        <button onClick={this.handleDelete} type="button" className="btn btn-danger">delete</button>
      </div>
    );
  }
});
var Listing = React.createClass({

  render: function(){
    var self = this;
    var recipeList = this.props.recipes.map(function(recipe){
      return (
        <div>
          <ItemListing key={recipe.cid} recipe={recipe} deleteRecipe={self.props.deleteRecipe}/>
      </div>
      );
    });
    return (
      <div className="col-sm-8 col-md-offset-2 recipe-list">
        <h3>All Recipes</h3>
        {recipeList}
      </div>
    )
  }
});

var AllRecipesContainer= React.createClass({
  getInitialState: function(){
    return {
      recipeCollection: new models.RecipeCollection()
    };
  },

  componentWillMount: function(){
    var recipeCollection = this.state.recipeCollection;
    console.log('recipe collection @ all recipes', recipeCollection);
    recipeCollection.fetch().then(() => {
      this.setState({recipeCollection: recipeCollection});
    });
  },

  deleteRecipe: function(recipe){
    recipe.destroy();
    this.setState({recipeCollection: this.state.recipeCollection});
   },
//make sure to call the deleteRecipe in the render first, then set up the method here and in the component. always!

  render: function(){
    return (
      <Template>
        <Listing recipes={this.state.recipeCollection} deleteRecipe={this.deleteRecipe}/>
      </Template>
    )
  }
});

module.exports = {
  AllRecipesContainer: AllRecipesContainer
};
