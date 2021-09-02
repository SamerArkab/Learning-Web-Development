var password = "password1234";
var response;
var counter = 0;
var error = false;

while(response != password && !error){
  if(counter < 3){
    response = window.prompt("Enter password:");
    counter++;
  }
  else {
    error = true;

  }
}

if(error)
  alert("Too many tries...");
else
  alert("Correct");
