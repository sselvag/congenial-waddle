var questions = [
    {
        question: "Commonly used data types DO not include:",
        option: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed with __________.",
        option: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: "paranthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store _______.",
        option: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within ___________ when being assigned to variables.",
        option: ["commas", "curly brackets", "quotes", "paranthesis"],
        answer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        option: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    }
];
var questionIndex = 0;
var score = 0;
var counter = 75;
var penalty = 10;

var startButton = document.getElementById('start-btn');
var quizContainerEl = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var answerButtonEl = document.getElementById('answer-buttons');
var introContainerEl = document.getElementById('introContainer');
var correctStatementEl = document.getElementById('correctStatement');
var incorrectStatementEl = document.getElementById('incorrectStatement');
var scoreContainerEl = document.getElementById('scoreContainer');
var scoreSentenceEl = document.getElementById('scoreSentence');

startButton.addEventListener('click', startGame)

function startGame() {
    quizContainerEl.classList.remove('hide');
    introContainerEl.classList.add('hide');
    setInterval( function (){
        counter--;
        if (counter >= 0){
            countdown.innerText = "Time: " + counter
        }
        if (counter === 0){
            gameFinished();
        }
    }, 1000);
    showQuestion(questionIndex)
};

function showQuestion(questionIndex) {
    questionEl.textContent = '';
    answerButtonEl.textContent = '';
    for (var i=0; i < questions.length; i++) {
        var quizQuestion = questions[questionIndex].question;
        var multipleChoice = questions[questionIndex].option;
        questionEl.textContent = quizQuestion;
    }
    multipleChoice.forEach(function (newItem) {
        var optionButtons = document.createElement("button");
        optionButtons.textContent = newItem;
        questionEl.appendChild(answerButtonEl);
        answerButtonEl.appendChild(optionButtons);
        optionButtons.addEventListener("click", (checkAnswers));
    })
};

function checkAnswers (event) {
    var element = event.target;
    if (element.textContent == questions[questionIndex].answer) {
        score++;
        // correctStatementEl.textContent = "Correct!";
        // setTimeout(() => {correctStatementEl.style.display = 'none'}, 1000);
    } else {
        counter = counter - penalty;
        // incorrectStatementEl.textContent = "Incorrect!";
        // setTimeout(() => {incorrectStatementEl.style.display = 'none'}, 1000);
    }
    questionIndex++;
    if (questionIndex >= questions.length) {
        gameFinished();
    } else {
        showQuestion(questionIndex)
    }
};

function gameFinished() {
    console.log("finished")
    quizContainerEl.classList.add('hide');
    scoreContainerEl.classList.remove('hide');
    scoreSentenceEl.innerText = "Your finial score is " + score + ".";
};
