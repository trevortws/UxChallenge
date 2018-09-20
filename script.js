function submitInput(){
  var button=document.getElementById('loginbutton');
  var userinput=document.getElementById('user_name')
  var pwinput=document.getElementById('password');
  var user_name=userinput.value;
  var pw= pwinput.value;
  if (pw.length<8||pw.length>24){
    pwinput.style.borderColor="red";
    pwinput.style.color="red";
    document.getElementById('pwErrorMessage').style.display="block";
    button.style.backgroundImage="";
    button.value="login";

  }
  else if (pw.length>=8){
    pwinput.style.borderColor="#e4d2ff";
    pwinput.style.color="#8456ff";
    document.getElementById('pwErrorMessage').style.display="none";
    button.style.backgroundImage="";
    button.value="login";
    if(user_name=="stackmaster"){
      document.getElementById('login').style.display="none";
      document.getElementById('success_message').style.display="block";
      document.body.style.backgroundColor="#7e24fa";
    }
  }
}
function sign_out(){
  document.body.style.backgroundColor="#f4ecff";
  document.getElementById('login').style.display="";
  document.getElementById('success_message').style.display="none";
}
function loading() {
  var button=document.getElementById('loginbutton');
  button.value="";
  button.style.backgroundImage="url(icon-loading.svg)";
  button.style.backgroundRepeat="no-repeat";
  button.style.backgroundPosition="center";
  button.style.backgroundSize="20px 20px";
  myVar = setTimeout(submitInput, 1000);
}
