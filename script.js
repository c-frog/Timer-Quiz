// GIVE VARIABLES TO EACH MAIN ELEMENT
let start = document.getElementById("startDiv");
let quiz = document.getElementById("quizDiv");
let initialsScore = document.getElementById("scoreDiv");
let question = document.getElementById("question")
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let totalScore = document.getElementById("totalScore");
let seconds = 60 ;

let interval;

// ARRAY OF QUESTIONS AND ANSWERS
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

// VARIABLES FOR QUESTION'S ARRAY
let lastQuestion = questions.length-1;
let runningQuestion = 0;

// RENDER QUESTIONS AND ANSWERS
function renderQuestion() {
    let q = questions[runningQuestion];
    question.innerHTML = "<h3>" + q.question + "</h3>";
    answer1.innerHTML = q.answer1;
    answer2.innerHTML = q.answer2;
    answer3.innerHTML = q.answer3;
    answer4.innerHTML = q.answer4;
}
let startBtn = document.getElementById("startBtn")
startBtn.addEventListener("click", startQuiz)
// TIMER FUNCTION
function countDown() {
    let timeLeft = document.getElementById("timer")
    let x = setInterval(function() {
        seconds--;
        let secondsString = seconds.toString();
        timeLeft.innerText = secondsString;
        if (seconds <= 0) {
            clearInterval(x);
            alert("out of time")
        } else if (lastQuestion === runningQuestion){
            clearInterval(x)
        }
    }, 1000);
}
// STARTING THE QUIZ
function  startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block"
    countDown();
    }
// Check answer functions
function checkAnswer(answer) {
    if (answer == questions [runningQuestion].correct) {
        console.log("correct!");
    } else {
        seconds -= 10;
        console.log("incorrect");
    }
    count = 0
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else 
    scoreRender();
}
function correctAnswer() {
    document.getElementById()
}

// SCORE PAGE
function scoreRender() {
    quiz.style.display = "none"
    initialsScore.style.display = "block";
    totalScore.innerHTML = "Your final score is " + seconds;
}

// SAVING AND DISPLAYING HIGHSCORES
let username = document.getElementById("username");
let submitBtn = document.getElementById("submitBtn")
submitBtn.addEventListener("click", saveScore)


function saveScore() {
    event.preventDefault();
    localStorage.setItem("userScore", JSON.stringify([username.value, seconds]))
    console.log(JSON.parse(localStorage.getItem("userScore")))
}


// HIGH SCORES PAGE
