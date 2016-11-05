var React = require('react');


var TemplateComponent = React.createClass ({
  render: function(){
    return (
      <div className="container">
        <div className="row nav">
          <div className="col-md-12 nav-col">
            <ul className="nav nav-tabs">
              <li><span className="nav-name">NAME</span><span className="nav-message"> ,welcome!</span></li>
              <li role="presentation" className="active"><a onClick={this.props.RecipiesHome} href="">Recipes Home</a></li>
              <li role="presentation"><a onClick={this.props.addRecipe}href="#/cart/">Add Recipe</a></li>
            </ul>
          </div>
        </div>

        <div className="row modal-row">
          <div className="col-md-12 modal-window">
            <div className="modaltest">

            </div>
          </div>
        </div>

          {this.props.children}


        <div className="row footer-row">
          <div className="col-md-12 footer-col">

          </div>
        </div>
      </div>

    );
}
});

module.exports = {
TemplateComponent: TemplateComponent
};
