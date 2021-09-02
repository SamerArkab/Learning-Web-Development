var header = document.getElementById("header"); //Store header from html to var header
//header contains an HTML object
header.innerHTML = "New text using JS";
header.style.color = "red";
header.style.backgroundColor = "cyan";
header.style.width = "250px";

var link = document.getElementById("link");
link.href = "https://yahoo.com";
link.style = "color:green";

function handleClick(element){
  element.innerHTML = "Done!";
  element.style="background-color:cyan";
  alert('cool...');
}
//IN JS FILE USE "MOUSEOVER" FOR EXAMPLE, WITHOUT "*ON*MOUSEOVER"
var image = document.getElementById("image");
image.addEventListener("mouseover", function(){
  this.style = "box-shadow: 2px 2px 2px grey";
  this.width = "200";
});
image.addEventListener("mouseout", function(){
  this.style = "";
  this.width = "100";
});

document.write('<hr/>');

var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
  var newMsg = document.createElement("li");
  newMsg.innerHTML = textbox.value;
  messages.appendChild(newMsg);
  textbox.value = "";
});
