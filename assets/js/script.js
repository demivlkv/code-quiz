let startButton = document.getElementById('start-btn');
let intro = document.getElementById('intro');
let questionContainerEl = document.getElementById('question-container');
let questionEl = document.getElementById('question');
let answerButtonEl = document.getElementById('answer-button');
let timeDisplay = document.getElementById('timer');

startButton.addEventListener('click', startGame);

let score = 0;

// begin the quiz upon button click
function startGame() {
    console.log('Quiz start!');
    startButton.classList.add('hidden');
    intro.classList.add('hidden');
    questionContainerEl.classList.remove('hidden');
    timeDisplay.classList.remove('hidden');
    nextQuestion();
    timer();
}

// create timer
function timer() {
    let sec = 30;
    var countDown = setInterval(function() {
        sec = sec < 10 ? '0' + sec : sec;
        timeDisplay.innerHTML = `Time Remaining 00:${sec}`;
        sec--;

        if (sec < 0) {
            clearInterval(countDown);
            alert("You're out of time!");
        }
    }, 1000);
};

// initiate the next question

function nextQuestion() {
    questionEl.classList.remove('hidden');

}

// answering a question

function chooseAnswer() {

}

let questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [
            { text: 'a', correct: true },
            { text: 'b', correct: false },
            { text: 'c', correct: false },
            { text: 'd', correct: false }
        ]
    },
    {
        question: 'The condition in an if / else statement is enclosed with ___.',
        answers: [
            { text: 'a', correct: true },
            { text: 'b', correct: false },
            { text: 'c', correct: false },
            { text: 'd', correct: false }
        ]
    },
    {
        question: 'Arrays in JavaScript is used to store ___.',
        answers: [
            { text: 'a', correct: true },
            { text: 'b', correct: false },
            { text: 'c', correct: false },
            { text: 'd', correct: false }
        ]
    },
    {
        question: 'Strong values must be enclosed within ___ when being assigned to variables.',
        answers: [
            { text: 'a', correct: true },
            { text: 'b', correct: false },
            { text: 'c', correct: false },
            { text: 'd', correct: false }
        ]
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            { text: 'a', correct: true },
            { text: 'b', correct: false },
            { text: 'c', correct: false },
            { text: 'd', correct: false }
        ]
    }
];