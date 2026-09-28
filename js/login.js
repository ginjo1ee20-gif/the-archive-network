function login(){

const code=document.getElementById("archiveCode").value;

const message=document.getElementById("message");

if(code==="THESIXTHDOOR"){

message.style.color="#00FFB3";

message.innerHTML="ACCESS GRANTED";

setTimeout(function(){

window.location.href="os.html";

},1500);

}

else{

message.style.color="#ff4444";

message.innerHTML="ACCESS DENIED";

}

}