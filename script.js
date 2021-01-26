'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let messageToUser = document.querySelector(".message");
let currentScore = 20;
let highScore = 0;

//check button
document.querySelector(".check").addEventListener
("click", function () {
        const input = Number(document.querySelector(".guess").value);
        console.log(typeof input)
        if (!input) {
                messageToUser.textContent = "Not a Number !";
        }
        //number is too low
        else if (input < secretNumber ) {
                if (currentScore > 0) {
                currentScore--;
                document.querySelector(".score").textContent = "Score :" + currentScore;
                }
                messageToUser.textContent = (currentScore < 1) ?
                    "You have lost!" : "Number is too low !";
        }
        //number ist too high
        else if (input > secretNumber) {
                if (currentScore > 0) {
                        currentScore--;
                        document.querySelector(".score").textContent = "Score :" + currentScore;
                }
                messageToUser.textContent = (currentScore < 1) ?
                    "You have lost!" : "Number is too high !";
        }
        //if correct number
        if (input === secretNumber) {
        messageToUser.textContent = "Congratz, you guessed the right number !";
                if (currentScore > highScore) {
                        highScore = currentScore;
                        document.querySelector(".highscore").textContent
                        = "Highscore :" + highScore;
                }
                document.querySelector("body")
                    .style.backgroundColor = "#60b347";
                document.querySelector(".mid-big-number").textContent = secretNumber;
        }
})
//again button
document.querySelector(".again").addEventListener
("click", function () {
        secretNumber = Math.trunc(Math.random()*10)+1;
        currentScore = 20;
        document.querySelector(".score").textContent = "Score :" + currentScore;
        document.querySelector(".message").textContent = "Guess my Number !";
        document.querySelector(".mid-big-number").textContent = "?";
        document.querySelector("body").style.backgroundColor = "#191e1e";
        document.querySelector("input").value = "";
})