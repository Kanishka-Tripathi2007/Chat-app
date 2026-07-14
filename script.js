const chatBox=document.getElementById("chatBox");

function sendMessage(){

const input=document.getElementById("message");

if(input.value==="") return;

const msg=document.createElement("div");
msg.classList.add("message","sent");
msg.innerHTML=input.value;

chatBox.appendChild(msg);

chatBox.scrollTop=chatBox.scrollHeight;

let text=input.value;

input.value="";

setTimeout(()=>{

const reply=document.createElement("div");
reply.classList.add("message","received");

reply.innerHTML="You said: "+text;

chatBox.appendChild(reply);

chatBox.scrollTop=chatBox.scrollHeight;

},800);

}
