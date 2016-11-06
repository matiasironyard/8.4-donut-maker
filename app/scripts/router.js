var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var AdjustRecipe = require('./components/AdjustRecipe.jsx').AdjustRecipe;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(AdjustRecipe),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.export = router;
