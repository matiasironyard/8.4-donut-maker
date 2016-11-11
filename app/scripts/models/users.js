var Backbone = require('backbone');

var User = Backbone.Model.extend({
  auth: function(){
    $.ajaxSetup({
      beforeSend: function(xhr){
        xhr.setRequestHeader("X-Parse-Application-Id", appId);
        xhr.setRequestHeader("X-Parse-REST-API-Key", apiKey);

        if(sessionId) {
          xhr.setRequestHeader("X-Parse-Session-Token", sessionId);
        }
      }
    });
  }
},{
  login: function(username, password, callbackObj){
    $.post('/login/' , {username: username, password: password}).then(function(response){
      var user = new User(response);
      user.auth();
      localStorage.setItem('user', JSON.stringify(user.toJSON()));
      callbackObj.succes(user, response);
    });
  },
  current: function(){
   var userData=  localStorage.getItem('user');
   if(!userData || !JSON.parse(userData).token){
     return undefined;
   }
   return new User(JSON.parse(userData));
  }
});

var user = User.current();

module.exports = {
  User: User
};
