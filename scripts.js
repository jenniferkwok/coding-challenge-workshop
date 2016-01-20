console.log('hey!')
$(document).ready(function(){

var loggedin

if(loggedin) {
  $("#loginlogout").text("logout");
}
else {
  $("#loginlogout").text("login");
}

})