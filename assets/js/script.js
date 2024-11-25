/**
 *  A fun and interactive math quiz game to test 
 *  and improve arithmetic skills with real-time feedback! 
 * */ 

// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }
    runGame("addition");
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user answer has been processed
 */
function runGame(gameType){

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply"){
        displayMultiplyQuestion(num1, num2);
    }
    else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}
/**
 * Gets the answer from the DOM
 * and compares with returned value from calculateCorrectAnswer 
 */
function checkAnswer(){
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore()
    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer()
    }
    runGame(calculatedAnswer[1]);
}
/**
 * Gets the operands (numbers) and operator (plus, minus, etc)
 * directly from the dom and returns correct answer
 */
function calculateCorrectAnswer(){
 
 let operand1 = parseInt(document.getElementById("operand1").innerText);
 let operand2 = parseInt(document.getElementById("operand2").innerText);
 let operator = document.getElementById("operator").innerText;

 if (operator === "+") {
    return [operand1 + operand2, "addition"]
 } else if (operator === "x"){
    return [operand1 * operand2, "multiply"]
 } else {
    alert(`Unimplemented operator: ${operator}`);
    throw `Unimplemented operator: ${operator}. Aborting!`; }

}
/**
 * Gets current score from DOM adds 1
 * and display incremented score back to DOM
 */
function incrementScore(){
    let currentScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").textContent = ++currentScore;
}
/**
 * Gets current wrong Answers counter from DOM adds 1
 * and display incremented score back to DOM
 */
function incrementWrongAnswer(){
    let incorrectAnswers = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").textContent = ++incorrectAnswers;
}
/**
 * Displays the math challenge for addition 
 * using the numbers generated in the runGame function
 */
function displayAdditionQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = `+`;
    
}
function displaySubtractionQuestion(){

}
/**
 * Displays the math challenge for multiplication 
 * using the numbers generated in the runGame function
 */
function displayMultiplyQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = `x`;
}
function displayDivideQuestion(){

}
