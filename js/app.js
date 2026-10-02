let randomNumber = Math.floor(Math.random() * 10) + 1;
let chances = 5;
let attempts = 0;

let guessInput = document.getElementById("guessInput");
let chancesDisplay = document.getElementById("chances");
let attemptsDisplay = document.getElementById("attempts");
let guessBtn = document.getElementById("guessBtn");
let restartBtn = document.getElementById("restartBtn");

function btnCheckGuessOnAction() {

    let guess = Number(guessInput.value);

    // Empty input check
    if (guessInput.value == "") {

        Swal.fire({
            icon: "warning",
            title: "Invalid Input",
            text: "Please enter a number between 1 and 10!",
            imageUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2hqNWozNjc4dzd0OW5yZzRqZTU3MDVvbnRseGp3ZjM3MXN4OHFraiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/UX06yZ6erE0fQtU1Sd/giphy.gif",
            imageWidth: 300,
            imageHeight: 300,
        });

    } 
    // Out of range check
    else if (guess < 1 || guess > 10) {

        Swal.fire({
            icon: "error",
            title: "Wrong Number",
            text: "Please enter a number between 1 and 10!",
            imageUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDBwc2Z0NnFlaWt6a3dqZm0wcHZ3bHRseHozMjZlbWZubWRzY3d3YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oz8xLd9DJq2l2VFtu/giphy.gif",
            imageWidth: 300,
            imageHeight: 300,
        });

    } 
    // Main Game Logic
    else {

        attempts++;
        chances--;

        attemptsDisplay.innerHTML = attempts;
        chancesDisplay.innerHTML = chances;

        // Correct Answer
        if (guess == randomNumber) {

            Swal.fire({
                icon: "success",
                title: "Done! You Won 🎉",
                text: "Awesome! The correct number was " + randomNumber,
                imageUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTJvZHMydjY4bnE0YTE3YWRlcHp2ZnppcGs3NGxxcWZ6ODZjeXljaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KEVNWkmWm6dm8/giphy.gif",
                imageWidth: 300,
                imageHeight: 300,
            });

            endGame();

        } 
        // Game Over 
        else if (chances == 0) {

            Swal.fire({
                icon: "error",
                title: "Game Over 💥",
                text: "No chances left! The correct number was " + randomNumber,
                imageUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXRjZ2gxcXc2NHRhcXB3b2FzanlmdmF3MWNiejUwcnNocTg3aHE5cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7y26WiCb6nBVeRyGdH/giphy.gif",
                imageWidth: 300,
                imageHeight: 300,
            });

            endGame();

        } 
        // Too High
        else if (guess > randomNumber) {

            Swal.fire({
                icon: "info",
                title: "Too High! 📉",
                text: "Too high, try a lower number!",
                imageUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazZvd2U4b29rbWhxc2hwMHgxdmsxcjB6NHdwdmpwMTlqaThncnBpZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2cei8MJiL2OWga5XoC/giphy.gif",
                imageWidth: 300,
                imageHeight: 300,

            });

        } 
        // Too Low
        else {

            Swal.fire({
                icon: "info",
                title: "Too Low! 📈",
                text: "Too low, try a higher number!",
                imageUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTdmc3A4MnNjNXFzcWVoamgzNDc1ZDQzbG13dnpmYmNicGRuMWZxbSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/tsbxhCSv8DGDpd3mlP/giphy.gif",
                imageWidth: 300,
                imageHeight: 300,
            });

        }

        guessInput.value = "";
    }
}

// Game Disabled 
function endGame() {
    guessInput.disabled = true;
    guessBtn.disabled = true;
    restartBtn.style.display = "block";
}

// Restart Game Action
function btnRestartGameOnAction() {

    randomNumber = Math.floor(Math.random() * 10) + 1;
    chances = 5;
    attempts = 0;

    chancesDisplay.innerHTML = chances;
    attemptsDisplay.innerHTML = attempts;

    guessInput.disabled = false;
    guessBtn.disabled = false;
    guessInput.value = "";

    restartBtn.style.display = "none";
}