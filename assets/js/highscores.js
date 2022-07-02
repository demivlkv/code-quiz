// list variables for highscores.html
const highScoresListEl = document.getElementById('highscores-list');
const backBtnEl = document.getElementById('back-btn');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

function loadHighScore() {
    highScores.sort( (a,b) =>  b.newScore - a.newScore);

    highScores.forEach(function(highScores) {
        let liTag = document.createElement('li');
        liTag.textContent = highScores.name + ' - ' + highScores.score;

        let showScores = document.getElementById('highscores-list');
        showScores.appendChild(liTag);
    })
};

loadHighScore();
