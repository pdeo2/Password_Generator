var generator=document.getElementById('gene');
var values=document.getElementById('length');
var chars="0123456789abcdefghijklmnopqrstuvwxyz!@#%&ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var pass="";
var length;
function myFunction(){
length=values.value;
values.value=" ";
for(var i=0;i<=length;i++){
var random=Math.floor(Math.random()*chars.length);
pass+=chars.substring(random,random+1);
}
values.value=pass;
}

function myfunction(){
  // Select the text field
  values.select();
  values.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(values.value);

  // Alert the copied text
  alert("Copied the text: " + values.value);
}


