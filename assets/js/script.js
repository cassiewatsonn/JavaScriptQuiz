//Start the Game 
function startGame() {
    timeLeft();
    showQuestion();
}

function showQuestion() {
    let quizQuestions = document.createElement("h2");
    quizQuestions.textContent = [thisQuestion].question;

}

function timeLeft() {

}

//Click the START! button -> Event Listener
startButton.addEventListener("click"), function (event) {
    event.stopPropagation();
    startButton.disabled = true;
    startGame();
}

//DOM Variables 
let startButton = document.querySelector('#startBtn');

//Question Variables
let correct = 0;
let thisQuestion = 0;
let timeLeft = 150;

//Quiz Question Array//
let quizQuestions = [
    {
        question: "What data types are supported by Javascript? a: boolean and string, b: symbol and number, c:null and undefined",
        answerChoices: ["a", "b", "all of the above", "c"],
        correct: 2,
    },
    {
        question: "What HTML element do we put JavaScript?",
        answerChoices: ["<javascript>", "<script>", "<link>", "<js"],
        correct: 1,
    },
    {
        question: "Where is the correct place to insert JavaScript?",
        answerChoices: ["the bottom of the <body>", "the <head>", "the top of the <body>", "the <header>"],
        correct: 0,
    },




]