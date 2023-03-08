// High Scores
let questionEl = document.createElement('div');
let scoreEl = document.getElementById('final-score');
let highScoresEl = document.getElementById('high-scores');
let initEl = document.getElementById('initials');

// Function to retrieve previous high scores from local storage
function showAllScores() {
    var existingScores = JSON.parse(localStorage.getItem("high-score")) || [];
    var scoreHTML = ``;
    for (var i = 0; i < existingScores.length; i++) {
      var scoreObj = existingScores[i];
      scoreHTML += `
      <li>Initials: ${scoreObj.initials}  Score: ${scoreObj.finalScore}</li>
      `
    }
    var scoreListEl = document.getElementById("score-list");
    scoreListEl.innerHTML = scoreHTML;
  }

  //Function to to add new highscore to local storage
function addNewScore() {
    var existingScores = JSON.parse(localStorage.getItem("high-score")) || [];
    var initials = initEl.value;
    var scoreObj = { initials: initials, finalScore: score };
    existingScores.push(scoreObj);
    localStorage.setItem("high-score", JSON.stringify(existingScores));
    showAllScores();
  }