// list variables for highscores.html
const backBtnEl = document.getElementById('back-btn');
const clearBtnEl = document.getElementById('clear-btn');
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

function goBack() {
    // redirect user to return to main page
    window.location.href = './index.html';
};

function clearHighScore() {
    
};

loadHighScore();

backBtnEl.addEventListener('click', goBack);
clearBtnEl.addEventListener('click', clearHighScore);
