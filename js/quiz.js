/*
 * questions.js is loaded in the HTML before quiz.js
 * It creates a global variable called questions that contains starter questions.
 * Take a look at the structure and familiarize yourself with each part
 * then, add some of your own questions!
 * Use this data to populate your quiz questions, choices, and answers.
 */
console.log(questions);

const start_btnEl = document.querySelector(".start-button");
const info_boxEl = document.querySelector(".info-box");

start_btnEl.onclick = () => {
    info_boxEl.classList.add("activeInfo");
}