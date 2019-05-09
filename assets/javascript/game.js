var computerChoice = ["r", "p", "s"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var guessCnt = 3;
var wrongGuessLetter = "";
var userChoice = "";

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userChoice-text");
var computerChoiceText = document.getElementById("computerChoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessCntText = document.getElementById("guessCnt-text");
var wrongGuessLetterText = document.getElementById("wrongGuessLetter-text");

function resetGame() {
    directions = "";
    userChoice = "";
    // computerChoice = "";
    // wins = 0;
    // losses = 0;
    guessCnt = 3;
    wrongGuessLetter = "";
}

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
     userGuess = event.key.toLowerCase();

    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
    if (userGuess === computerGuess) {
           // document.write("You won! Let's play again.")
        wins++;
         console.log("Wins: " + wins);
         resetGame();
        }
    else {
        guessCnt--;
        wrongGuessLetter = wrongGuessLetter + userGuess + ",";
        wrongGuessLetterText.textContent = wrongGuessLetter;
    }

    if (guessCnt === 0)
    { 
        losses++; 
        console.log("Losses: " + losses);
        resetGame();
    }
   
    directionsText.textContent = "";

     // Display the user and computer guesses, and wins/losses/ties.
     userChoiceText.textContent = "You chose: " + userGuess;
     computerChoiceText.textContent = "The computer chose: " + computerGuess;
     winsText.textContent = "Wins: (# of times you guessed the letter correctly) " + wins;
     lossesText.textContent = "Losses: (# of times you failed to guess the letter correctly) " + losses;
     guessCntText.textContent = "Guesses Left: " + guessCnt;
     wrongGuessLetterText.textContent = "Your Guesses So Far: " + wrongGuessLetter;
}
