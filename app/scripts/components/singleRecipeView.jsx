var React = require('react');

var models = require('../models/recipe');
var AdjustRecipeContainer = require('./adjustRecipe.jsx').AdjustRecipeContainer;

var RecipeHeader = React.createClass({
  render: function(){
    return(
      <div>
        <h1>{this.props.recipe.get('name')}</h1>
        <a href={'#recipes/' + this.props.recipe.get('objectId') + '/edit/'}>Edit Recipe</a>
      </div>
    );
  }
});


var SingleRecipeContainer = React.createClass({
  getInitialState: function(){
    return {
      recipe: new models.Recipe()
    }
  },

  componentWillMount: function(){
    var recipe = this.state.recipe;
    var recipeId = this.props.recipeId;
    if(!recipeId){
      return;
    }

    recipe.set('objectId', recipeId);
    recipe.fetch().then(()=> {
      this.setState({recipe: recipe});
    });
  },
  render: function(){
    return(
      <AdjustRecipeContainer recipe={this.state.recipe}/>
    );
  }
});


module.exports = {
  SingleRecipeContainer: SingleRecipeContainer
};
