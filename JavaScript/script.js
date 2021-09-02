var phrase = "Hello World";
var num = 28;
var bool = true;
var noVal = null; //Normal way for using null
document.write(phrase + '<br/>');

phrase = "Goodbye World";

//Doesn't matter if number is 1.0 or 1, JS will distinguish
document.write(phrase + " " + num + " " + bool);

//Using string -
document.write('<br/>' + '<hr/>' + "Normal way of using strings");
document.write('<br/>' + phrase.length); //for string's length
document.write('<br/>' + phrase.toUpperCase());
//the normal manipulations...kind of (same for numbers)
document.write('<br/>' + phrase.indexOf("o"));
//returns index of first found char (-1 if doesn't exist in string)
//Example of some uses:
document.write('<br/>' + phrase.substring(phrase.indexOf("b"), phrase.length).toUpperCase());
document.write('<br/>' + (((2+2)*5)%11));

var numberToRound = 2.1;
document.write('<br/>' + Math.round(numberToRound) + " " + Math.round(Math.random()));
