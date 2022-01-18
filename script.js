// Questions
 const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: [
            "<js>", 
            "<javascript>", 
            "<scripting>", 
            "<script>"],
        answer: "<script>"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: [
            "commas", 
            "curly brackets", 
            "quotes", 
            "parenthesis"],
        answer: "quotes"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: [
            "numbers and strings", 
            "other arrays", 
            "booleans", 
            "all of the above"],
        answer: "other arrays"
    },
    {
        question: "How do you create a function in JavaScript",
        choices: [
            "function = myFunction()", 
            "function myFunction()", 
            "function:myFunction()", 
            "createMyFunction()"],
        answer: "function myFunction()"
    },
    {
        question: "How do you call a function named myFunction?",
        choices: [
            "call myFunction()", 
            "call function myFunction()",
            "myFunction()", 
            "call myFunction"],
        answer: "myFunctions()"
    },
    {
        question: "To see if two variables are equal in an if / else statement you would use ____.",
        choices: [
            "=",
            "==",
            "'equals'", 
            "!="],
        answer: "=="
    },
    {
        question: "The first index of an array is ____.",
        choices: [
            "0", 
            "1", 
            "8", 
            "any"],
        answer: "0"
    },
    {
        question: "Who invented JavaScript?",
        choices: [
            "Douglas Crockford", 
            "Sheryl Sandberg", 
            "Brendan Eich", 
            "Ben Javascript"],
        answer: "Brendan Eich"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        choices: [
            "if i == 5 then", 
            "if i = 5 then", 
            "if(i == 5)", 
            "if i = 5"],
        answer: "if(i == 5)"
    },
    {
        question: "How do you add a comment in a JavaScript?",
        choices: [
            "//This is a comment", 
            "<!--This is a comment-->", 
            "'This is a comment", 
            "* This is a comment *"],
        answer: "//This is a comment"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choices: [
            "onclick", 
            "onchange", 
            "onmouseover", 
            "onmouseclick"],
        answer: "onclick"
    },
    {
        question: "Commonly used data types DO NOT include:",
        choices: [
            "strings",
            "booleans",
            "alerts",
            "numbers"
        ],
        answer: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: [
            "quotes",
            "curly brackets",
            "parentheses",
            "square brackets"
        ],
        answer: "parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        answer: "all of the above"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: [ 
            "JavaScript",
            "terminal / bash",
            "for loops",
            "console.log"
        ],
        answer: "console.log"
    }
];

// Elements
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");

var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");

var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");

var summary = document.getElementById("summary");
var submitInitialBtn = document.getElementById("submitInitialBtn");
var initialInput = document.getElementById("initialInput");
var everything = document.getElementById("everything");

var highScoreSection = document.getElementById("highScoreSection");
var finalScore = document.getElementById("finalScore");

var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoreBtn = document.getElementById("clearHighScoreBtn"); 
var viewHighScore = document.getElementById("viewHighScore");
var listOfHighScores = document.getElementById("listOfHighScores");

// Variables
var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;

/* FUNCTIONS */

// Timer
var totalTime = 151;
function newQuiz() {
    questionIndex = 0;
    totalTime = 150;
    timeLeft.textContent = totalTime;
    initialInput.textContent = "";

    startDiv.style.display = "none";
    questionDiv.style.display = "block";
    timer.style.display = "block";
    timesUp.style.display = "none";

    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                gameOver();
            }
        }
    },1000);

    showQuiz();
};

console.log(questions[questionIndex].question);
console.log(questions[questionIndex].choices);

// Presenting questions
function showQuiz() {
    nextQuestion();
}

function nextQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
}

// Amswer checking 
function checkAnswer(answer) {

    var lineBreak = document.getElementById("lineBreak");
    lineBreak.style.display = "block";
    answerCheck.style.display = "block";

    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        // correct answer, add 1 score to final score
        correctAns++;
        answerCheck.textContent = "Correct!";
    } else {
        // wrong answer, deduct 10 second from timer
        totalTime -= 10;
        timeLeft.textContent = totalTime;
        answerCheck.textContent = "Wrong! The correct answer is: " + questions[questionIndex].answer;
    }

    questionIndex++;
    // Sifting through Array for questions
    if (questionIndex < questions.length) {
        nextQuestion();
    } else {
        // If there are no more questions remaining in the Array, End the game.
        gameOver();
    }
}

function chooseA() { checkAnswer(0); }

function chooseB() { checkAnswer(1); }

function chooseC() { checkAnswer(2); }

function chooseD() { checkAnswer(3); }

// Game over condition
function gameOver() {
    summary.style.display = "block";
    questionDiv.style.display = "none";
    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "block";

    // display the final score
    finalScore.textContent = correctAns;
}

// Recording initials and storing the score locally
function storeHighScores(event) {
    event.preventDefault();

    // Enforcing the user to enter a name.
    if (initialInput.value === "") {
        alert("Please enter your initials!");
        return;
    } 

    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScoreSection.style.display = "block";   

    // Storing the score
    var savedHighScores = localStorage.getItem("high scores");
    var scoresArray;

    if (savedHighScores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedHighScores)
    }

    var userScore = {
        initials: initialInput.value,
        score: finalScore.textContent
    };

    console.log(userScore);
    scoresArray.push(userScore);

    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);
    
    showHighScores();
}

// Show highscores
var i = 0;
function showHighScores() {

    startDiv.style.display = "none";
    timer.style.display = "none";
    questionDiv.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScoreSection.style.display = "block";

    var savedHighScores = localStorage.getItem("high scores");

    // Checking local storage
    if (savedHighScores === null) {
        return;
    }
    console.log(savedHighScores);

    var storedHighScores = JSON.parse(savedHighScores);

    for (; i < storedHighScores.length; i++) {
        var eachNewHighScore = document.createElement("p");
        eachNewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
        listOfHighScores.appendChild(eachNewHighScore);
    }
}

/* Event listeners*/

startQuizBtn.addEventListener("click", newQuiz);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);

submitInitialBtn.addEventListener("click", function(event){ 
    storeHighScores(event);
});

viewHighScore.addEventListener("click", function(event) { 
    showHighScores(event);
});

goBackBtn.addEventListener("click", function() {
    startDiv.style.display = "block";
    highScoreSection.style.display = "none";
});

clearHighScoreBtn.addEventListener("click", function(){
    window.localStorage.removeItem("high scores");
    listOfHighScores.innerHTML = "High Scores Cleared!";
    listOfHighScores.setAttribute("style", "font-family: 'Archivo', sans-serif; font-style: italic;")
});