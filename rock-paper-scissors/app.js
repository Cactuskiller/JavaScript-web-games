const ComputerChoiceDisplay = document.getElementById("Computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultsDisplay = document.getElementById("results");
const possisbleChoices = document.querySelectorAll("button");

//glable varibale
let userChoice;
let compuerChoice;
let results;
// a for each loop will be used to itterate throw the possible choices that the users has choicesn and then decide using an if else statments
possisbleChoices.forEach((possisbleChoices) =>
  possisbleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    decideResults();
  })
);
//in the following a function that will generate the compuer choice and for this will use the math.random wich will choice a number that is attached to a one of the avaliable choices
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; //or insted of 3 you can use the possisbleChoices.length
  if (randomNumber === 1) {
    compuerChoice = "rock";
  }
  if (randomNumber === 2) {
    compuerChoice = "scissors";
  }
  if (randomNumber === 3) {
    compuerChoice = "paper";
  }
  ComputerChoiceDisplay.innerHTML = compuerChoice;
}

//a function to determin the results
function decideResults() {
  if (compuerChoice === userChoice) {
    results = "it's a draw!";
  }
  if (compuerChoice === "rock" && userChoice === "paper") {
    results = "you win!";
  }
  if (compuerChoice === "rock" && userChoice === "scissors") {
    results = "you lost!";
  }
  if (compuerChoice === "paper" && userChoice === "rock") {
    results = "you lost!";
  }
  if (compuerChoice === "paper" && userChoice === "scissors") {
    results = "you win!";
  }
  if (compuerChoice === "scissors" && userChoice === "rock") {
    results = "you win!";
  }
  if (compuerChoice === "scissors" && userChoice === "paper") {
    results = "you lost!";
  }
  resultsDisplay.innerHTML = results;
}
