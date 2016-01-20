console.log('hey!')
$(document).ready(function(){

var loggedin

if(loggedin) {
  $("#loginlogout").text("LOGOUT");
}
else {
  $("#loginlogout").text("LOGIN");
}

})