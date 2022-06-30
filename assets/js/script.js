const displayTime = document.getElementById('timer');
const questionContainerEl = document.getElementById('question-container');
const intro = document.getElementById('intro');
const questionEl = document.getElementById('question');
const answerButtonEl = document.getElementById('answer-buttons');
const startButton = document.getElementById('start-btn');
const displayAnswer = document.getElementById('answer');

startButton.addEventListener('click', startQuiz);

let score = 0;
let shuffleQuestions, currentQuestionIndex;

// begin the quiz upon button click
function startQuiz() {
    startButton.classList.add('hide');
    intro.classList.add('hide');
    questionContainerEl.classList.remove('hide');
    displayTime.classList.remove('hide');
    shuffleQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    timer();
    setQuestion();
    console.log(shuffleQuestions);
};

// countdown timer
function timer() {
    let sec = 60;
    var countDown = setInterval(function() {
        sec = sec < 10 ? '0' + sec : sec;
        displayTime.innerHTML = `Time Remaining 00:${sec}`;
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
    for (let i = 0; i < question.answer.length; i++) {
        let answerButton = document.createElement('button');
        answerButton.innerText = question.answer[i].text;
        answerButton.classList.add('btn');
        answerButton.addEventListener('click', function () {
            // display 'correct' or 'wrong' after choosing an answer
            let answer = question.answer[i].correct;
            if (answer) {
                answerCorrect();
                score++;
            } else {
                answerWrong();
                score--;
            } 
            // set up the next question after choosing an answer
            if (shuffleQuestions.length > currentQuestionIndex + 1) {
                currentQuestionIndex++;
                setQuestion();
            } else {
                endQuiz();
                highScores();
                debugger;
            }
        })
        answerButtonEl.appendChild(answerButton);
    }
};

// display 'correct' after correct response
function answerCorrect() {
    displayAnswer.classList.remove('hide');
    displayAnswer.textContent = 'Correct!';
    displayAnswer.setAttribute('style', 'color: #84dccf');
};

// display 'wrong' after incorrect response
function answerWrong() {
    displayAnswer.classList.remove('hide');
    displayAnswer.textContent = 'Wrong!';
    displayAnswer.setAttribute('style', 'color: #ef626c');
};

// end of the quiz
function endQuiz() {
    startButton.classList.remove('hide');
    intro.classList.remove('hide');
    questionContainerEl.classList.add('hide');
    displayTime.classList.add('hide');
    intro.textContent = "You're done!"
};

function highScores() {

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