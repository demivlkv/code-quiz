let startButton = document.getElementById('start-btn');
let intro = document.getElementById('intro');
let questionContainerEl = document.getElementById('question-container');
startButton.addEventListener('click', startGame);
let score = 0;
let questionEl = document.getElementById('question');
let answerButtonEl = document.getElementById('answer-button');

// begin the quiz upon button click
function startGame() {
    console.log('Quiz start!');
    startButton.classList.add('hidden');
    intro.classList.add('hidden');
    questionContainerEl.classList.remove('hidden');
    nextQuestion();
}

// initiate the next question

function nextQuestion() {
/* for (var i = 0; i < questions.length; i++) {
    var response = questions[i];
    if (response === questions[i].answers) {
        score++;
    } else {
        alert('Wrong!');
    }
 } */
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