//Select all elements
let start = document.getElementById("startDiv");
let quiz = document.getElementById("quizDiv");
let initialsScore = document.getElementById("scoreDiv");
let question = document.getElementById("question")
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let totalScore = document.getElementById("totalScore");
let score = 0;

// Questions for quiz
let questions = [
    {
        question: "Commonly used data types DO NOT INCLUDE:",
        answer1: "Strings",
        answer2: "Booleans",
        answer3: "Alerts",
        answer4: "Numbers",
        correct: "3"
    },
    {
        question: "The condition in an if/else statement is enclosed within ___.",
        answer1: "Quotes",
        answer2: "Curly Braces",
        answer3: "Parentheses",
        answer4: "Square Brackets",
        correct: "3"
    },
    {
        question: "Arrays in JS can be used to store:",
        answer1: "Numbers and Strings",
        answer2: "Other Arrays",
        answer3: "Blooleans",
        answer4: "All of the above",
        correct: "4"
    },
    {
        question: "String values must be enclosed within ___ when being assigned to variables",
        answer1: "Commas",
        answer2: "Curly Brackets",
        answer3: "Quotes",
        answer4: "Parentheses",
        correct: "3"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer1: "JavaScript",
        answer2: "Terminal/Bash",
        answer3: "For Loops",
        answer4: "Console.log",
        correct: "4"
    },
]
let lastQuestion = questions.length-1;
let runningQuestion = 0;

// Function to render questions and answers
function renderQuestion() {
    let q = questions[runningQuestion];
    question.innerHTML = "<h3>" + q.question + "</h3>";
    answer1.innerHTML = q.answer1;
    answer2.innerHTML = q.answer2;
    answer3.innerHTML = q.answer3;
    answer4.innerHTML = q.answer4;
}

start.addEventListener("click", startQuiz)

function  startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block"
    }

// Check answer functions
function checkAnswer(answer) {
    if (answer == questions [runningQuestion].correct) {
        score++
    } else {
        alert("Wrong!"); // still NEED TO ADD AN ALERT

    }
    count = 0
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else 
    //clearInterval(timer); //
    scoreRender();
}
function correctAnswer() {
    document.getElementById()
}

// SCORE PAGE
function scoreRender() {
    quiz.style.display = "none"
    initialsScore.style.display = "block";
    totalScore.innerHTML = "You scored " + score + "%";
}





