var React = require('react');
var models = require('../models/recipe');

var ItemListing = React.createClass({
  render: function(){
    var recipe = this.props.recipe;
    console.log(recipe);
    return (
      <a href={'#recipes/' + recipe.get('objectId') + '/'} className="list-group-item">{recipe.get('name')}</a>
    )
  }
});
var Listing = React.createClass({
  render: function(){
    var recipeList = this.props.recipes.map(function(recipe){
      console.log(recipeList);
      return <ItemListing key={recipe.cid} recipe={recipe}/>
    });
    return (
      <div>
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
    recipeCollection.fetch().then(() => {
      this.setState({recipeCollection: recipeCollection});
    });
    console.log('recipe collection', recipeCollection);
  },

  render: function(){
    return (
      <Listing recipes={this.state.recipeCollection}/>
    )
  }
});

module.exports = {
  AllRecipesContainer: AllRecipesContainer
};
