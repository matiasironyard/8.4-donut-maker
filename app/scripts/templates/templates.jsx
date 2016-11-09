var React = require('react');
/**
*General layout for app
*<Layout>..</Layout>
*/
function Template(props){
    return (
      <div class="container-fluid">
        <div class="menu row">
          <div class="col-md-11 nav-bar-col">
            <a href="#"><div class="facebook"></div></a>
              <ul class="nav nav-tabs">
                <li><span class="nav-name">#,</span><span class="nav-message"> Welcome!</span></li>
                <li role="presentation" class="active"><a onClick={this.props.RecipiesHome} href="">Recipes Home</a></li>
                <li role="presentation"><a onClick={this.props.addRecipe}href="#/add-recipe/">Add Recipe</a></li>
                <li role="presentation"><a onClick={this.props.addRecipe}href="#/view-recipes/">View Recipes</a></li>
                <li role="presentation"><a onClick={this.props.addRecipe}href="#/edit-recipe/">Edit Recipe</a></li>
              </ul>
          </div>
          <div class="col-md-12 header-col">
            <div class="header-title">
              <h1 class="restaurant-name">Two Cups of Flour Backery</h1>
              <h3 class="subtitle">Create and Share Tasty Recipes</h3>
            </div>
          </div>
          <div class="components">
      
          </div>
        </div>
        <div className="col-md-12-fluid footer">
          <span className="footer-title">Two Cups Of Flour Bakery</span> <p>Copyright © Two Cups Of Flour Backery 2016</p>
        </div>
      </div>
    );
  }
});

module.exports = {
Template: Template
};
