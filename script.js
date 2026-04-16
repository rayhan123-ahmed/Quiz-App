// select all the elements
const questionText = document.querySelector("#question");
const options = document.querySelector(".options");
const optionBtns = document.querySelectorAll(".option-btn");
const controls = document.querySelector(".controls");
const nextBtn = document.querySelector("#nextBtn");
const resetBtn = document.querySelector("#resetBtn");
const scoreBox = document.querySelector(".score-box");
const scoreText = document.querySelector("#score");

// quiz data
const quizData = [
  {
    question: "What is the capital of Bangladesh?",
    options: ["Chittagong", "Dhaka", "Khulna", "Sylhet"],
    correct: 1,
  },
  {
    question: "Which language is used for web structure?",
    options: ["CSS", "HTML", "JavaScript", "Python"],
    correct: 1,
  },
  {
    question: "Which one is NOT a programming language?",
    options: ["Java", "Python", "HTML", "C++"],
    correct: 2,
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<link>", "<a>", "<href>", "<p>"],
    correct: 1,
  },
  {
    question: "Which company created JavaScript?",
    options: ["Microsoft", "Apple", "Netscape", "Google"],
    correct: 2,
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["<!-- -->", "//", "/* */", "#"],
    correct: 1,
  },
  {
    question: "Which CSS property changes text color?",
    options: ["font-color", "text-color", "color", "fgcolor"],
    correct: 2,
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language",
    ],
    correct: 0,
  },
];

let currentQuestion = 0
let score = 0
let answered = false

// load question

function loadQuestion() {
    answered = false

   const current = quizData[currentQuestion];
   questionText.textContent = current.question;

    optionBtns.forEach((btn,index)=>{
      btn.textContent = current.options[index];
      btn.disabled = false;
      btn.classList.remove("correct", "wrong");
    })
}

// cheack answer

optionBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (answered) return;

    answered = true;

    const correctIndex = quizData[currentQuestion].correct;

    if (index === correctIndex) {
      btn.classList.add("correct");
      score++;
      scoreText.textContent = score;
    } else {
      btn.classList.add("wrong");
      optionBtns[correctIndex].classList.add("correct");
    }

    optionBtns.forEach(btn => btn.disabled = true)
  });
});

// next button
nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    questionText.textContent = "Quiz Finished!";
    document.querySelector(".options").style.display = "none";
    nextBtn.style.display = "none";
    resetBtn.style.display = 'block'
    controls.style.justifyContent = "center";
  }
});

// start quize 
loadQuestion();