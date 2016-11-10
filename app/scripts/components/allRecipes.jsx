var React = require('react');
var models = require('../models/recipe');
var Template = require('../templates/templates.jsx');

var ItemListing = React.createClass({

  render: function(){
    var recipe = this.props.recipe;
    console.log(recipe);
    return (
      <div className="recipe-list-items"><a href={'#recipes/' + recipe.get('objectId') + '/'} className="list-group-item">{recipe.get('name')}</a><button onClick={this.deleteRecipe} type="button" className="btn btn-danger">delete</button></div>
    );
  }
});
var Listing = React.createClass({

  render: function(){
    var recipeList = this.props.recipes.map(function(recipe){
      console.log(recipeList);
      return (
        <div>
          <ItemListing key={recipe.cid} recipe={recipe}/>
      </div>
      );
    });
    return (
      <div className="col-sm-5 recipe-list">
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

  deleteRecipe: function(){
     var recipe = this.state.recipe;
     recipe.destroy();
     this.setState({recipe: recipe});
   },


  render: function(){
    return (
      <Template>
        <Listing recipes={this.state.recipeCollection}/>
      </Template>
    )
  }
});

module.exports = {
  AllRecipesContainer: AllRecipesContainer
};
