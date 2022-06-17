let questions = [
    {question: "Commonly used data types DO not include:",
    answer: [
        {text: "1. strings", correct: false},
        {text: "2. booleans", correct: false},
        {text: "3. alerts", correct: true},
        {text: "4. numbers", correct: false}]
    },
    {question: "The condition in an if / else statement is enclosed with __________.",
    answer: [ 
        {text: "1. quotes", correct: false},
        {text: "2. curly brackets", correct: false},
        {text: "3. parenthesis", correct: true},
        {text: "4. square brackets", correct: false}]
    },
    {question: "Arrays in JavaScript can be used to store _______.",
    answer: [
        {text: "1. numbers and strings", correct: false},
        {text: "2. other arrays", correct: false},
        {text: "3. booleans", correct: false},
        {text: "4. all of the above", correct: true}]
    },
    {question: "String values must be enclosed within ___________ when being assigned to variables.",
    answer: [
        {text: "1. commas", correct: false},
        {text: "2. curly brackets", correct: false},
        {text: "3. quotes", correct: true},
        {text: "4. paranthesis", correct: false}]
    },
    {question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer: [
        {text: "1. JavaScript", correct: false},
        {text: "2. terminal/bash", correct: false},
        {text: "3. for loops", correct: false},
        {text: "4. console.log", correct: true}]
    }
];

var startButton = document.getElementById('start-btn');
var quizContainerEl = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var answerButtonEl = document.getElementById('answer-buttons');
var introContainerEl = document.getElementById('introContainer');

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function startGame() {
    var counter = 75;
    setInterval( function (){
        counter--;
        if (counter >= 0){
            id = document.getElementById('countdown');
            id.innerText = "Time: " + counter
        }
    }, 1000);
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() -.5)
    currentQuestionIndex = 0 
    quizContainerEl.classList.remove('hide')
    introContainerEl.classList.add('hide')
    setNextQuestion()
}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answer.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        // button.classList.add('btn')
        // if (answer.correct) {
        //     button.dataset.correct = answer.correct
        // }
        // button.addEventListener('click', selectAnswer)
        answerButtonEl.appendChild(button)
    })
}

function resetState() {
    while (answerButtonEl.firstChild) {
        answerButtonEl.removeChild(answerButtonEl.firstChild)
    }
}

function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    // setStatusClass(document.body, correct)
    // Array.from(answerButtonEl.children).forEach (button => {
    //     setStatusClass(button, button.dataset.correct)
    // })
};


// function clearStatusClass(element) {

// }





