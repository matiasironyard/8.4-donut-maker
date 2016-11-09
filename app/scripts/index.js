var $ = window.jQuery = window.$ = require('jquery');

var Backbone = require('backbone');
require('./router.js');

$(function(){
 Backbone.history.start();

});
