// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");
});

/**
 * the main game "loop", called when the script is first loaded
    * and after the user's answer has been processed
 */
function runGame(gameType) {
    // Game logic goes here

    // Generate two random numbers between 1 and 25
    // These numbers will be used for the math questions
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

function checkAnswer() {
    // Answer checking logic goes here
}

function calculateCorrectAnswer() {
    // Logic to calculate the correct answer based on the operation
}

function incrementScore() {
    // Logic to increment the score
}

function incrementWrongAnswer() {
    // Logic to increment the wrong answer count
}

function displayAdditionQuestion(operand1, operand2) {
    // Display addition question logic
    document.getElementById("opperand1").textContent = operand1;
    document.getElementById("opperand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion(operand1, operand2) {
    // Display subtraction question logic
    document.getElementById("opperand1").textContent = operand1;
    document.getElementById("opperand2").textContent = operand2;
    document.getElementById("operator").textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {
    // Display multiplication question logic
    document.getElementById("opperand1").textContent = operand1;
    document.getElementById("opperand2").textContent = operand2;
    document.getElementById("operator").textContent = "*";
}

function displayDivisionQuestion(operand1, operand2) {
    // Display division question logic
    document.getElementById("opperand1").textContent = operand1;
    document.getElementById("opperand2").textContent = operand2;
    document.getElementById("operator").textContent = "/";
}  