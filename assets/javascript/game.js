// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoice = ["r", "p", "s"];
var guessSoFar = [ ];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
// var ties = 0;
var guessCnt = 3;

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userChoice-text");
var computerChoiceText = document.getElementById("computerChoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
// var tiesText = document.getElementById("ties-text");
var guessCntText = document.getElementById("guessCnt-text");
var guessSoFarText = document.getElementById("guessSoFar-text");

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

// Determines which key was pressed.
var userGuess = event.key;

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

// This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number

if  (userGuess === computerGuess) 
    {wins++;
    losses = 0;
    guessCnt;}
else if 
    (userGuess !== computerGuess)
    {guessCnt--;}
else 
    ((guessCnt = 1) && (userGuess !== computerGuess))
    {losses++;
    guessCntr;}

directionsText.textContent = "";

// Display the user and computer guesses, and wins/losses/ties.
userChoiceText.textContent = "You chose: " + userGuess;
computerChoiceText.textContent = "The computer chose: " + computerGuess;
winsText.textContent = "Wins: (# of times you guessed the letter correctly) " + wins;
lossesText.textContent = "Losses: (# of times you failed to guess the letter correctly) " + losses;
// tiesText.textContent = "ties: " + ties;
guessCntText.textContent = "Guesses Left: " + guessCnt;
guessSoFarText.textContent = "Your Guesses So Far: " + guessSoFar;
}
