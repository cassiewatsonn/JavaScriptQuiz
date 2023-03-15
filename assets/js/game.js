// TODO: MAKE TIMER!
let questionIndex = 0; 
let questionText = document.getElementById("questionText");
let questionArea = document.getElementById("questionArea");
let timerPenalty = 5;
let score = 0;
const highscore = document.getElementById("high-scores");
// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");
const result = document.getElementById("result");



var secondsLeft = 60;

  //Quiz Question Array//
  var quizQuestions = [
    {
        question: "What data types are supported by Javascript? a: boolean and string, b: symbol and number, c:null and undefined",
        options: ["a", "b", "all of the above", "c"],
        correct: "all of the above",
    },
    {
        question: "What HTML element do we put JavaScript?",
        options: ["<javascript>", "<script>", "<link>", "<js"],
        correct: "<script>",
    },
    {
        question: "Where is the correct place to insert JavaScript?",
        options: ["the bottom of the <body>", "the <head>", "the top of the <body>", "the <header>"],
        correct: "the bottom of the <body>",
    },
    {
        question: "What data types are supported by Javascript? a: boolean and string, b: symbol and number, c:null and undefined",
        options: ["a", "b", "all of the above", "c"],
        correct: "all of the above",
    },

];

function setTime() {

  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left...";
    console.log(secondsLeft);

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      highscore.style.display = "block";
      sendMessage();
    }
    

  }, 1000);
//   showQuestion();
}

// Function to create and append colorsplosion image
function sendMessage() {
    timeEl.textContent = "Game Over! Please enter your initials to view the High Scores.";
    // var imgEl = document.createElement("img");
    // imgEl.setAttribute("src", "images/image_1.jpg");
    // mainEl.appendChild(imgEl);

    //TODO: Redirect to highscores.html when timer runs out 
    let timeOutEventListener = function(){
        window.location.href = "highscores.html";
      }
      
      timeEl.addEventListener('timeout', timeOutEventListener);
  

  }

  setTime();
  showQuestion();







 // Render Quiz Questions 


function showQuestion(){
    let currentQuestion = quizQuestions[questionIndex];
    questionText.textContent = currentQuestion.question;
    setTimeout(()=> {
        result.textContent="";
    }, 1000);
    for (let i = 0; i < currentQuestion.options.length; i++){
       let choice = currentQuestion.options[i];
       let currentBtn = `btn${i + 1}`;
       let buttonNum = document.getElementById(currentBtn);
       buttonNum.textContent = choice;
    }
};

// TODO: check answer from user input from the answer array and if wrong, deduct 10 seconds


function checkAnswer(answer){

    console.log(answer);

    let currentQuestion = quizQuestions[questionIndex];
    
    if (currentQuestion.correct === answer) {
        score++;
        result.textContent="Correct!"
    }
    else {
        secondsLeft -= 10;
        result.textContent="Wrong!"
    }
    console.log(questionIndex);
    questionIndex++;
    if (questionIndex < quizQuestions.length){
        showQuestion();
    }
    else{
    secondsLeft=1;
    questionArea.style.display="none";
    highscore.style.display = "block";
    }
    

}; 

for (let i = 0; i < 4; i++){
    let currentBtn = `btn${i + 1}`;
    let buttonNum = document.getElementById(currentBtn);
    buttonNum.addEventListener("click", function(event){
        console.log(event.target.textContent);
        let userClick = event.target.textContent;
        checkAnswer(userClick)
    });
 }


 // will need to work on local storage if I want to use a different html for highscores/endpage
 

