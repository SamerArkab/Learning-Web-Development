var questions = [
  {
    prompt: "What color is the fridge?\n(a) white\n(b) green\n(c) grey",
    answer: "a"
  },
  {
    prompt: "This is:\n(a) C++\n(b) Python\n(c) JS",
    answer: "c"
  },
  {
    prompt: "Choose a:\n(a) this one\n(b) nope\n(c) risk it?",
    answer: "a"
  }
]
var score = 0;

for(var i=0; i<questions.length; i++){
  var response = window.prompt(questions[i].prompt);
  if(response == questions[i].answer)
    score++;
  else{
    alert("Wrong");
  }
}
alert("Total score of " + score + "/" + questions.length);

  //an EXAMPLE of forEach loop, which iterates through all of the array
    questions.forEach(function(element){
      document.write(element.prompt + "<br/>");
      document.write(element.answer + "<br/><br/>");
    })
