const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const intro = document.getElementById('intro');
const questionContainerEl = document.getElementById('question-container');
const questionEl = document.getElementById('question');
const answerButtonEl = document.getElementById('answer-buttons');
const timeDisplay = document.getElementById('timer');

startButton.addEventListener('click', startGame);

let score = 0;
let shuffleQuestions, currentQuestionIndex;

// begin the quiz upon button click
function startGame() {
    startButton.classList.add('hidden');
    intro.classList.add('hidden');
    questionContainerEl.classList.remove('hidden');
    timeDisplay.classList.remove('hidden');
    shuffleQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    nextQuestion();
    timer();
};

// create timer
function timer() {
    let sec = 60;
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

// function to set up the next question
function nextQuestion() {
    resetState();
    questionEl.classList.remove('hidden');
    showQuestion(shuffleQuestions[currentQuestionIndex]);
};

function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', chooseAnswer);
        answerButtonEl.appendChild(button);
    })
};

function resetState() {
    nextButton.classList.add('hidden');
    while (answerButtonEl.firstChild) {
        answerButtonEl.removeChild(answerButtonEl.firstChild);
    }
};

// answering a question
function chooseAnswer(e) {
    const answerButton = e.target;
    const correct = answerButton.dataset.correct;
    setStatus(document.getElementById('answer-buttons'), correct);
    Array.from(answerButtonEl.children).forEach(button => {
        setStatus(button, button.dataset.correct)
    })
    nextButton.classList.remove('hidden');
};

function setStatus(element, correct) {
    clearStatus(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
};

function clearStatus(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

let questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        answer: [
            { text: '1. strings', correct: false },
            { text: '2. booleans', correct: false },
            { text: '3. alerts', correct: true },
            { text: '4. numbers', correct: false }
        ]
    },
    {
        question: 'The condition in an if / else statement is enclosed with ___.',
        answer: [
            { text: 'a', correct: true },
            { text: 'b', correct: false },
            { text: 'c', correct: false },
            { text: 'd', correct: false }
        ]
    },
    {
        question: 'Arrays in JavaScript is used to store ___.',
        answer: [
            { text: 'a', correct: true },
            { text: 'b', correct: false },
            { text: 'c', correct: false },
            { text: 'd', correct: false }
        ]
    },
    {
        question: 'Strong values must be enclosed within ___ when being assigned to variables.',
        answer: [
            { text: 'a', correct: true },
            { text: 'b', correct: false },
            { text: 'c', correct: false },
            { text: 'd', correct: false }
        ]
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answer: [
            { text: 'a', correct: true },
            { text: 'b', correct: false },
            { text: 'c', correct: false },
            { text: 'd', correct: false }
        ]
    }
];