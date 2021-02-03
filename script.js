'use strict';
// Declaring and initializing variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let messageToUser = document.querySelector(".message");
let currentScore = 20;
let highScore = 0;

// Adding selectors
const helpTxt = document.querySelector(".layer")
const helpBtn = document.querySelector(".help-button");

// Implementing the help button
helpBtn.addEventListener("click", function () {
    helpTxt.classList.toggle("hidden");
})
// Implementing the ESC press to close help txt
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape")
        helpTxt.classList.add("hidden");
})


// Check button
document.querySelector(".check").addEventListener
("click", function () {
    const input = Number(document.querySelector(".guess").value);
    // If checked button pressed with an empty value output: Not a Number
    if (!input) {
        messageToUser.textContent = "Not a Number !";
    } else if (input !== secretNumber) {
        // Subtraction of score
        if (currentScore > 0) {
            currentScore--;
            document.querySelector(".score").textContent = "Score :" + currentScore;
        }
        // Checking and output of: You have lost/number too low/number too high
        if (input < secretNumber || input > secretNumber) {
            messageToUser.textContent = (currentScore < 1) ?
                "You have lost!" : (input < secretNumber) ? "Number is too low !" : "Number is too high !";
        }
    }
    // If correct number
    if (input === secretNumber) {
        messageToUser.textContent = "Congratulation, you guessed the right number !";
        if (currentScore > highScore) {
            highScore = currentScore;
            document.querySelector(".highScore").textContent
                = "Highscore :" + highScore;
        }
        document.querySelector("body")
            .style.backgroundColor = "#60b347";
        document.querySelector(".mid-big-number").textContent = secretNumber;
    }
})
// Implementing the again button and resetting the values of the page /score/background-color/GuessNumber/SecretNumber
document.querySelector(".again").addEventListener
("click", function () {
    secretNumber = Math.trunc(Math.random() * 10) + 1;
    currentScore = 20;
    document.querySelector(".score").textContent = "Score :" + currentScore;
    document.querySelector(".message").textContent = "Guess my Number !";
    document.querySelector(".mid-big-number").textContent = "?";
    document.querySelector("body").style.backgroundColor = "#191e1e";
    document.querySelector("input").value = "";
})