var React = require('react');

var models = require('../models/recipe');
var Template = require('../templates/templates.jsx');
var AdjustRecipeContainer = require('./adjustRecipe.jsx').AdjustRecipeContainer;

var RecipeHeader = React.createClass({
  render: function(){
    return(
      <div className="col-md-8 col-md-offset-2 single-view-header">
        <h1 className="edit-recipe-header" >{this.props.recipe.get('name')}</h1>
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
      <Template>
        <RecipeHeader recipe={this.state.recipe}/>
        <AdjustRecipeContainer recipe={this.state.recipe}/>
      </Template>
    );
  }
});

module.exports = {
  SingleRecipeContainer: SingleRecipeContainer
};
