//Instead of  setting Ajax headers in the components or router, it is best practice to set these up in a separate file, as below.

function setupParse(appId, apiKey, sessionId){
  $.ajaxSetup({
    beforeSend: function(xhr){
      xhr.setRequestHeader("X-Parse-Application-Id", "matiasrecipeserver");
      xhr.setRequestHEader("X-Parse-REST-API-Key", "recipe");

      if(sessionId {
        xhr.setRequestheader("X-Parse-Session-Token", sessionId);
        //pass sessionId from localStorage?
      })
    }
  });
}

module.exports = {
  setupParse: setupParase
};
