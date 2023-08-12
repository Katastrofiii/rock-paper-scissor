let person = prompt("Please enter your name", "Jherald");
  if (person != null) {
    document.getElementById("h1").innerHTML =
    "Hello " + person + "! How are you today?";
  }

function myFunction() {
    let randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber > 0.33 && randomNumber <= 0.66) {
        computerMove = "Scissor"
    } else if (randomNumber > 0 && randomNumber <= 0.33) {
        computerMove = "Paper"
    } else if (randomNumber> 0.66 && randomNumber< 1) {
        computerMove = "Rock"
    }
    document.getElementById('computer').innerHTML = "Computer move: " + computerMove;

    let result = '';

 if (computerMove === 'Rock') {
   result = "tied";
 } else if (computerMove === "Paper") {
    result = "lose";
 } else {
    result = "win";
 }

 document.getElementById('value').innerHTML = "You "+result +" against the computer";
}  


function myFunction1() {
    let randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber > 0.33 && randomNumber <= 0.66) {
        computerMove = "Scissor"
    } else if (randomNumber > 0 && randomNumber <= 0.33) {
        computerMove = "Paper"
    } else if (randomNumber> 0.66 && randomNumber< 1) {
        computerMove = "Rock"
    }
    document.getElementById('computer').innerHTML = "Computer move: " + computerMove;

    let result = '';

 if (computerMove === 'Paper') {
   result = "tied";
 } else if (computerMove === "Rock") {
    result = "win";
 } else {
    result = "lose";
 }

 document.getElementById('value').innerHTML = "You "+result +" against the computer";
}  

function myFunction2() {
    let randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber > 0.33 && randomNumber <= 0.66) {
        computerMove = "Scissor"
    } else if (randomNumber > 0 && randomNumber <= 0.33) {
        computerMove = "Paper"
    } else if (randomNumber> 0.66 && randomNumber< 1) {
        computerMove = "Rock"
    }
    document.getElementById('computer').innerHTML = "Computer move: " + computerMove;

    let result = '';

 if (computerMove === 'Scissor') {
   result = "tied";
 } else if (computerMove === "Paper") {
    result = "win";
 } else {
    result = "lose";
 }

 document.getElementById('value').innerHTML = "You "+result +" against the computer";
}
