/*
 * questions.js is loaded in the HTML before quiz.js
 * It creates a global variable called questions that contains starter questions.
 * Take a look at the structure and familiarize yourself with each part
 * then, add some of your own questions!
 * Use this data to populate your quiz questions, choices, and answers.
 */
console.log(questions);


// Required elements
const startEl = document.querySelector(".start-button");
const infoEl = document.querySelector(".info-box");
const exitEl = document.querySelector(".quit-btn");
const continueEl = document.querySelector(".continue-btn");
const quizEl = document.querySelector(".quiz-box")


// Start button activiting the Info
startEl.onclick = ()=> {
    infoEl.classList.add("activeInfo");
}

// Quit button to return to the start
exitEl.onclick = ()=> {
    infoEl.classList.remove("activeInfo");
}

// Continue button to show the quiz
continueEl.onclick = ()=> {
    infoEl.classList.remove("activeInfo");
    quizEl.classList.add("activeQuiz");
    showQuestions();
}

let que_count = 0;

function showQuestions(){
    const que_text = document.querySelector('.que_text');
    let que_tag = '<span>' + questions[0].title +'</span>';
    que_text.innerHTML = que_tag;
}