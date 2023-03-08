// TODO: MAKE TIMER!

// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 60;

function setTime() {

  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left...";
    

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }
    showQuestion();

  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
    timeEl.textContent = "Game Over, redirecting you to High Scores";
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






  //Quiz Question Array//
var quizQuestions = [
    {
        question: "What data types are supported by Javascript? a: boolean and string, b: symbol and number, c:null and undefined",
        options: ["a", "b", "all of the above", "c"],
        correct: 2,
    },
    {
        question: "What HTML element do we put JavaScript?",
        options: ["<javascript>", "<script>", "<link>", "<js"],
        correct: 1,
    },
    {
        question: "Where is the correct place to insert JavaScript?",
        options: ["the bottom of the <body>", "the <head>", "the top of the <body>", "the <header>"],
        correct: 0,
    },
    {
        question: "What data types are supported by Javascript? a: boolean and string, b: symbol and number, c:null and undefined",
        options: ["a", "b", "all of the above", "c"],
        correct: 2,
    },

];

  // Render Quiz Questions 

let questionIndex = 0; 
let questionText = document.getElementById("questionText");

function showQuestion(){
    let currentQuestion = quizQuestions[questionIndex];
    questionText.textContent = currentQuestion.question;

    for (var i = 0; i < currentQuestion.options.length; i++){
       var choice = currentQuestion.options[i];
       let currentBtn = `btn${i + 1}`;
       let buttonNum = document.getElementById(currentBtn);
       buttonNum.textContent = choice;
    }
};

// TODO: check answer from user input from the answer array and if wrong, deduct 10 seconds
let timerPenalty = 5;

function checkAnswer(index){

    console.log(index);

    let currentQuestion = quizQuestions[questionIndex];
    
    if (currentQuestion.choice === index) {
        score++;
    }
    else {
        timeEl = timeEl - timerPenalty;
    }
    questionIndex++;
    if (questionIndex < quizQuestions.length){
        showQuestion();
    }

}; 



