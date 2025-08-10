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
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

function runGame() {
    // Game logic goes here
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
}

function displaySubtractQuestion(operand1, operand2) {
    // Display subtraction question logic
} 

function displayMultiplyQuestion(operand1, operand2) {
    // Display multiplication question logic
}

function displayDivisionQuestion(operand1, operand2) {
    // Display division question logic
}  