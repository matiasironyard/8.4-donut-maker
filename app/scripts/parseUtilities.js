//Instead of  setting Ajax headers in the components or router, it is best practice to set these up in a separate file, as below.


function setupParse(appId, apiKey, sessionId){
  $.ajaxSetup({
    beforeSend: function(xhr){
      xhr.setRequestHeader("X-Parse-Application-Id", appId);
      xhr.setRequestHeader("X-Parse-REST-API-Key", apiKey);

      if(sessionId) {
        xhr.setRequestHeader("X-Parse-Session-Token", sessionId);
        //pass sessionId from localStorage?
      }
    }
  });
}
// 
// var user = Backbone.Model.extend({
//   auth: function(){
//     $.ajaxSetup({
//       beforeSend: function(xhr){
//         xhr.setRequestHeader("X-Parse-Application-Id", appId);
//         xhr.setRequestHeader("X-Parse-REST-API-Key", apiKey);
//
//         if(sessionId) {
//           xhr.setRequestHeader("X-Parse-Session-Token", sessionId);
//           //pass sessionId from localStorage?
//         }
//       }
//     });
//   }
// },{
//   login: function(username, password, callbackObj){
//     $.post('/login/' , {username: username, password: password}).then(function(response){
//       var user = new User(response);
//       user.auth();
//       localStorage.setItem('user', JSON.stringify(user.toJSON()));
//       callbackObj.succes(user, response);
//     });
//   },
//   current: function(){
//    var userData=  localStorage.getItem('user');
//    if(!userData || !JSON.parse(userData).token){
//      return undefined;
//    }
//    return new User(JSON.parse(userData));
//   }
// });
//
// var user = User.current();
module.exports = {
  setupParse: setupParse
};
