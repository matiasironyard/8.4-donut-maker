var React = require('react');

var recipes = require('../models/recipes');
var TemplateComponent = ('./templates.jsx').TemplateComponent;

var AdjustFormComponent = React.createClass({
  //pass in recipe
  render: function(){
    return (
      <div className="adjust-view">
        <form className="form-inline">
          <div className="form-group">
            <label htmlFor="servings">Servings</label>
            <input type="text" className="form-control" id="original-servings" placeholder="original servings"/>
            <label htmlFor="measurement-us" className="radio-stack">
              <input defaultChecked id="measurement-us" type="radio" name="measurements" value="imperial" />
              <span>US</span>
            </label>
            <label htmlFor="measurement-metric" className="radio-stack">
                <input disabled id="measurement-metric" type="radio" name="measurements" value="metric" />
                <span>Metric</span>
            </label>
          </div>
          <button type="submit" className="btn btn-default">Adjust Recipe</button>
        </form>
      </div>
    );
  }
});

var IngredientsComponent = React.createClass({
  render: function(){
    //get and map ingredients her.
    return (
      <div className="ingredients-view">
        <ul className="ingredients-ul">
          <li className="ingredients-li">
            <input type="checkbox">
              //pass ingredients here
            </input>
          </li>
        </ul>
      </div>
    );
  }
});

var AdjustRecipeContainer = React.createClass({
  render: function(){
    return (
        <TemplateComponent>
          <div className="col-md-6">
            <AdjustFormComponent/>
            <IngredientsComponent/>
          </div>
        </TemplateComponent>
    );
  }
});
module.exports = {
  AdjustRecipeContainer: AdjustRecipeContainer
};
