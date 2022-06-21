var questions = [
    {
        question: "Commonly used data types DO not include:",
        option: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed with __________.",
        option: ["quotes", "curly brackets", "paranthesis", "square brackets"],
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
var submitButton = document.getElementById('submit-btn');
var highScoreContainerEl = document.getElementById('highScoreContainer');
var initialsInput = document.getElementById('initials');
var error = document.getElementById('errorMessage');
var highScoresOuput = document.getElementById('highScoresOuput');

startButton.addEventListener('click', startGame)

function startGame() {
    quizContainerEl.classList.remove('hide');
    introContainerEl.classList.add('hide');
    setInterval( function (){
        counter--;
        if (counter >= 0){
            countdown.innerText = "Time: " + counter
        }
        if ((!questionIndex >= questions.length)&&(counter === 0)){
            gameFinished();
        }
    }, 1000);
    showQuestion(questionIndex);
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
    } else {
        counter = counter - penalty;
    }
    questionIndex++;
    if (questionIndex >= questions.length) {
        gameFinished();
    } else {
        showQuestion(questionIndex)
    }
};

var form = document.getElementById("form");
form.onsubmit = function(e) {
    e.preventDefault();
}

function gameFinished() {
    console.log("finished")
    quizContainerEl.classList.add('hide');
    scoreContainerEl.classList.remove('hide');
    countdown.classList.add('hide');
    scoreSentenceEl.innerText = "Your finial score is " + score + ".";

}; 

submitButton.onclick = function () {
    var key = initialsInput.value;
    localStorage.setItem(key, score);
    highScoreBoard();
};

function highScoreBoard() {
    scoreContainerEl.classList.add('hide');
    highScoreContainerEl.classList.remove('hide');
    for (let i=0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var score = localStorage.getItem(key);
        highScoresOuput.innerText += `${key}: ${score} \n`;
    };
    var clearButton = document.getElementById('clearScores');
    var goBackButton = document.getElementById('goBack');
    clearButton.addEventListener('click', clearScores);
    goBackButton.addEventListener('click', restart);
};

function clearScores() {
    localStorage.clear();
    restart();
}

function restart() {
    location.reload();
}