//DOM Variables 
const startButton = document.querySelector('#startBtn');
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const score = document.querySelector('#score');


//Question Variables
var currentQuestion = {};
var answers = true;
var scoreNum = 0;
var correct = 0;
var thisQuestion = 0;
var availableQuestions = [];


var timeLeft = 150;

//Quiz Question Array//
var quizQuestions = [
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

];

const SCORE = 100
const MAX = 3

startGame = () => {
    questionCounter = 0 
    score = 0 
    availableQuestions = [...questions]
    getNewQuestion()
}

// getNewQuestion = () => {
//     if(availableQuestions.length === 0 || qu)
// };












//  //Start the Game 
//  function startGame() {
 
//  }
 
//  // function startTimer() {
 
//    let startTimer = setInterval(function() {
//      myTimer();
//    }, 1000);
 
 
//    //When start button clicked, calls startTimer function    
//    timer.addEventListener('click', startTimer);
 
 
//  // function showQuestion() {
//  //     let quizQuestions = document.createElement("h2");
//  //     quizQuestions.textContent = [thisQuestion].question;
 
//  // }
 
 
 
//  //Click the START! button -> Event Listener
//  startButton.addEventListener("click"), function (event) {
//      event.stopPropagation();
//      startButton.disabled = true;
//      startGame();
//  }