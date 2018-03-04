
//Guessing game

//number range min = 1, max = 10
//button is clicked
//select random number between 0-11?

//var randomNumber = Math.floor(Math.random() * 11) + 1;
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;

//prompt when button is clicked 
var guess = prompt ('I am thinking of a number between 1-10, can you guess what it is?');
//input from player
  
  //counts number of inputs
//for loop?
  //console.log(You tried 'numTries' times!);
  
//compares input from player w/ selected random number
  //correct anwser "Correct!" {"Do you want to play again?!"}
  //randomNumber == input;
  if (randomNumber == input) {
  console.log("Correct!");
  };
  //wrong anwser "Sorry, try again!"
  //randomNumber != input;
  else if (randomNumber != input) {
     console.log("Sorry, try again!");
  };  
  //wrong input
  //console.log ("inproper input, please enter a number between 1 - 10.")
  else (input < 1 || input > 10){
    console.log ("inproper input, please enter a number between 1 - 10.");
  };

  //restart ('play again?')
