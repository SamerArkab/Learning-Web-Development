var name = window.prompt("Enter your name: "); //prompt the user to give an input
document.write("Yo " + name + " " + window.prompt("What is your last name?"));
document.write('<br/>');

var num1 = window.prompt("Enter first number:");
var num2 = window.prompt("Enter second number:");
//Convert variables to actual numbers
num1 = parseInt(num1); //Convert String to Integer (which will round a decimal number)
num2 = parseFloat(num2);
document.write((num1 + num2));
document.write('<br/>');

//Normal use of arrays
var fruits = new Array("Apples", "Oranges", "Homework");
var moreFruits = ["Apples", "Oranges", "Homework"];
document.write(fruits + '<br/>');
document.write(moreFruits[2] + moreFruits.length);
document.write('<br/>');

//Functions
function helloWorld(age , bool){
  var name = window.prompt("Enter something:");
  document.write("<h1>Hello World! " + name + " " + age + " " + bool + "</h1>");
  return "done";
}
var status = helloWorld(70, true);
document.write(status);
