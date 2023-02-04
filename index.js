let userInputEl = document.getElementById("userInput");
let gameResultEl = document.getElementById("gameResult");

let randomNumber = Math.ceil(Math.random()*100);

function checkGuess() {
    let guessedNumber = parseInt(userInputEl.value);

    if (guessedNumber > randomNumber) {
        gameResultEl.textContent = "Too High! Try Again.";
        gameResultEl.style.backgroundColor = "#1e217c";
    } else if (guessedNumber < randomNumber) {
        gameResultEl.textContent = "Too Low! Try Again.";
        gameResultEl.style.backgroundColor = "#1e217c";
    } else if (guessedNumber === randomNumber) {
        gameResultEl.textContent = "Congratulations! You got it right...";
        gameResultEl.style.backgroundColor = "green";
    } else {
        gameResultEl.textContent = "Please provide a valid input.";
        gameResultEl.style.backgroundColor = "1e217c";
    }
}