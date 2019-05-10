// var computerChoice = ["r", "p", "s"];
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var guessCnt = 10;
var wrongGuessLetter = "";
var userChoice = "";

// Create variables that hold references to the places in the HTML where we want to display things.
// The Document method getElementById() returns an Element object representing the element whose id property 
// matches the specified string. Since element IDs are required to be unique if specified, they're a useful
// way to get access to a specific element quickly.

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
    guessCnt = 10;
    wrongGuessLetter = "";
}

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    userGuess = event.key.toLowerCase();

    // computer randomly selects a letter from a - z
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
        wrongGuessLetter = wrongGuessLetter + userGuess + ", ";
        wrongGuessLetterText.textContent = wrongGuessLetter;
    }

    if (guessCnt === 0) {
        losses++;
        console.log("Losses: " + losses);
        resetGame();
    }

    directionsText.textContent = "";

    //Display the user and computer guesses, and wins/losses/ties.
    //.textContent returns the text content
    userChoiceText.textContent = "You chose: " + userGuess;
    computerChoiceText.textContent = "The computer chose: " + computerGuess;
    winsText.textContent = "Wins (# of times you guessed the letter correctly): " + wins;
    lossesText.textContent = "Losses (# of times you failed to guess the letter correctly): " + losses;
    guessCntText.textContent = "Guesses Left: " + guessCnt;
    wrongGuessLetterText.textContent = "Your Guesses So Far: " + wrongGuessLetter;
}
