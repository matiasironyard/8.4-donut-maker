var React = require('react');

var models = require('../models/recipe');
var Template = require('../templates/templates.jsx');
var AdjustRecipeContainer = require('./adjustRecipe.jsx').AdjustRecipeContainer;

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
        <AdjustRecipeContainer recipe={this.state.recipe}/>
      </Template>
    );
  }
});

module.exports = {
  SingleRecipeContainer: SingleRecipeContainer
};

      // <RecipeHeader recipe={this.state.recipe}/>
