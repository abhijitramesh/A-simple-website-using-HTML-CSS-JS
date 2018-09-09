<script>
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "abcd" && password == "abcd"){
alert ("login succesfully");
return false;
}
else{
alert("please enter a valid username and password");
}
}
</script>
