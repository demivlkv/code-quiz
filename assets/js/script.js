const timeDisplay = document.getElementById('timer');
const questionContainerEl = document.getElementById('question-container');
const intro = document.getElementById('intro');
const questionEl = document.getElementById('question');
const answerButtonEl = document.getElementById('answer-buttons');
const startButton = document.getElementById('start-btn');
const answer = document.getElementById('answer');

startButton.addEventListener('click', startQuiz);

let score = 0;
let shuffleQuestions, currentQuestionIndex;

// begin the quiz upon button click
function startQuiz() {
    startButton.classList.add('hide');
    intro.classList.add('hide');
    questionContainerEl.classList.remove('hide');
    timeDisplay.classList.remove('hide');
    shuffleQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    timer();
    setQuestion();
};

// countdown timer
function timer() {
    let sec = 59;
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

// set up the next question & reset any changes
function setQuestion() {
    resetState();
    questionEl.classList.remove('hide');
    displayQuestion(shuffleQuestions[currentQuestionIndex]);
};

function resetState() {
    while (answerButtonEl.firstChild) {
        answerButtonEl.removeChild(answerButtonEl.firstChild);
    }
};

// display questions & answer buttons
function displayQuestion(question) {
    questionEl.innerText = question.question;
    for (var i = 0; i < question.answer.length; i++) {
        let answerButton = document.createElement('button');
        answerButton.innerText = question.answer[i].text;
        answerButton.classList.add('btn');
        answerButton.addEventListener('click', checkAnswer);
        answerButtonEl.appendChild(answerButton);
    }
};

// display 'correct' after correct response
function answerCorrect() {
    if (answer.className = 'hide') {
        answer.classList.remove('hide');
        answer.classList.add('correct');
        answer.textContent = 'Correct!';
    }
};

// display 'wrong' after incorrect response
function answerWrong() {
    if (answer.className = 'hide') {
        answer.classList.remove('hide');
        answer.classList.add('wrong');
        answer.textContent = 'Wrong!';
    }
};

// display correct or wrong answer and add time penalty response if incorrect
function checkAnswer(answer) {
    if (questions[currentQuestionIndex].answer == answer) {
        answerCorrect();
        score++;
    } else {
        answerWrong();
        score--;
    } 
    if (shuffleQuestions.length > currentQuestionIndex + 1) {
        currentQuestionIndex++;
        setQuestion();
    } else {
        endQuiz();
        clearInterval(countDown);
        showScore();
    }
};

// end of the quiz
function endQuiz() {
    startButton.classList.remove('hide');
    intro.classList.remove('hide');
    questionContainerEl.classList.add('hide');
    timeDisplay.classList.add('hide');
    intro.textContent = "You're done!"
};

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
            { text: '1. quotes', correct: false },
            { text: '2. curly brackets', correct: false },
            { text: '3. parenthesis', correct: true },
            { text: '4. square brackets', correct: false }
        ]
    },
    {
        question: 'Arrays in JavaScript is used to store ___.',
        answer: [
            { text: '1. numbers and strings', correct: false },
            { text: '2. other arrays', correct: false },
            { text: '3. booleans', correct: false },
            { text: '4. all of the above', correct: true }
        ]
    },
    {
        question: 'String values must be enclosed within ___ when being assigned to variables.',
        answer: [
            { text: '1. commas', correct: false },
            { text: '2. curly brackets', correct: false },
            { text: '3. quotes', correct: true },
            { text: '4. parenthesis', correct: false }
        ]
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answer: [
            { text: '1. JavaScript', correct: false },
            { text: '2. terminal/bash', correct: false },
            { text: '3. for loops', correct: false },
            { text: '4. console.log', correct: true }
        ]
    }
];