var React = require('react');
/**
*General layout for app
*<Layout>..</Layout>
*/
function Template(props){
    return (
      <div className="container-fluid">
        <div className="menu row">
          <div className="col-md-11 nav-bar-col">
            <a href="#"><div className="facebook"></div></a>
              <ul className="nav nav-tabs">
                <li><span className="nav-name">NAME</span><span className="nav-message"> ,welcome!</span></li>
                <li role="presentation" className="active"><a onClick={this.props.RecipiesHome} href="">Recipes Home</a></li>
                <li role="presentation"><a onClick={this.props.addRecipe}href="#/add-recipe/">Add Recipe</a></li>
                <li role="presentation"><a onClick={this.props.addRecipe}href="#/view-recipes/">View Recipes</a></li>
                <li role="presentation"><a onClick={this.props.addRecipe}href="#/edit-recipe/">Edit Recipe</a></li>
              </ul>
          </div>
          <div className="col-md-12 header-col">
            <div className="header-title">
              <h1 className="restaurant-name">Baker's Shop</h1>
              <h3 className="subtitle">Tasty Recipes</h3>
            </div>
          </div>
          <div className="components">
          {this.props.children}
          </div>
        </div>
        <div className="col-md-12-fluid footer">
          <span className="footer-title">Two Cups Of Flour</span> <p>Copyright © Two Cups Of Flour 2016</p>
        </div>
      </div>
    );
  }
});

module.exports = {
Template: Template
};
