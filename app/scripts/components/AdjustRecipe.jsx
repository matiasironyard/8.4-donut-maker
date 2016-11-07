var React = require('react');

var recipes = require('../models/recipes');
var TemplateComponent = ('./templates.jsx').TemplateComponent;

var AdjustFormComponent = React.createClass({
  //pass in orginal servings in getInitialState...

  //onChange method here (target value)....

  //Submint method here (pass this.props.something down to container)...

  render: function(){
    var self = this;
    // var Ingredients = pass in recipe here;
    return (
      <div className="adjust-view">
        <form className="form-inline">
          <div className="form-group">
            <label htmlFor="servings">Servings</label>
            //for input, set value to servings from model and do onChange method
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

});

var IngredientsComponent = React.createClass({
  render: function(){
    //get and map ingredients her.
    //set var for ingredietns and get ingredients...
    //map over ingredients and do return below...
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
//Do initial state and bring in collection...

//bring in "something method" from form...
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
