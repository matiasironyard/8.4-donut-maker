var React = require('react');
/**
*General layout for app
*<Layout>..</Layout>
*/
function Template(props){
    return (
      <div>
        <div className="container-fluid">
          <div className="menu row">
            <div className="col-md-11-fluid nav-bar-col">
              <a href="#"><div className="facebook"></div></a>
                <ul className="nav nav-tabs">
                  <li><span className="nav-name">#,</span><span className="nav-message"> Welcome!</span></li>
                  <li role="presentation" className="active"><a  href="">Recipes Home</a></li>
                  <li role="presentation"> <a href="#recipes/add/">Add Recipe</a></li>
                  <li role="presentation"><a href="#recipes/">View Recipes</a></li>
                </ul>
            </div>
            <div className="col-md-12 header-col">
              <div className="header-title">
                <h1 className="restaurant-name">Two Cups of Flour Backery</h1>
                <h3 className="subtitle">Create and Share Tasty Recipes</h3>
              </div>
            </div>
            <div className="components">
              {props.children}
            </div>
          </div>
          <div className="col-md-12-fluid footer-col">
            <span className="footer-title">Two Cups Of Flour Bakery</span> <p>Copyright © Two Cups Of Flour Backery 2016</p>
          </div>
        </div>
      </div>
    )
  }


module.exports = Template;
