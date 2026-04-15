// select all the elements
const question = document.querySelector("#question");
const options = document.querySelector(".options");
const optionBtns = document.querySelectorAll(".option-btn");
const controls = document.querySelector(".controls");
const nextBtn = document.querySelector("#nextBtn");
const scoreBox = document.querySelector(".score-box");
const scoreText = document.querySelector("#score");

// quiz data
const quizData = [
  {
    question: "What is the capital of Bangladesh?",
    options: ["Chittagong", "Dhaka", "Khulna", "Sylhet"],
    correct: 1
  },
  {
    question: "Which language is used for web structure?",
    options: ["CSS", "HTML", "JavaScript", "Python"],
    correct: 1
  },
  {
    question: "Which one is NOT a programming language?",
    options: ["Java", "Python", "HTML", "C++"],
    correct: 2
  }
];

let currentQuestion = 0
let score = 0
let answered = false