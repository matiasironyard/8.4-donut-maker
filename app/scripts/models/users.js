// var Backbone = require('backbone');
//
// var UserModel = Backbone.Model.extend({
//   urlRoot: 'https://matias-recipe.herokuapp.com/users',
//   setLocalStorage: function(response){
//     var Response = JSON.stringify(response);
//     localStorage.setItem('user', Response);
//     localStorage.setItem('ObjectID', response.objectID);
//     localStorage.setItem('sessionToken', response.sessionToken);
//   },
//   Header: function(response){
//     $.ajaxSetup({
//       beforeSetup: function(xhr){
//         xhr.setRequestHeader('X-Parse-Application-Id', 'matiasrecipeserver'),
//         xhr.setRequestHeader('X-Parse-Sessinon-Token', response.sessionToken),
//         // xhr.setRequestHeader('X-Parse-REST-API-Key', 'recipe'),
//       }
//     });
//   },
// });
//
// module.exports = {
//   User: User
// };
