// GIVE VARIABLES TO EACH MAIN ELEMENT
var start = document.getElementById("startDiv");
var quiz = document.getElementById("quizDiv");
var scoreDiv = document.getElementById("scoreDiv");
var question = document.getElementById("question")
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var totalScore = document.getElementById("totalScore");
var seconds = 60 ;

// ARRAY OF QUESTIONS AND ANSWERS
var questions = [
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
var lastQuestion = questions.length-1;
var runningQuestion = 0;

// RENDER QUESTIONS AND ANSWERS
function renderQuestion() {
    var q = questions[runningQuestion];
    question.innerHTML = "<h3>" + q.question + "</h3>";
    answer1.innerHTML = q.answer1;
    answer2.innerHTML = q.answer2;
    answer3.innerHTML = q.answer3;
    answer4.innerHTML = q.answer4;
}
var startBtn = document.getElementById("startBtn")
startBtn.addEventListener("click", startQuiz)
// TIMER FUNCTION
function countDown() {
    var timeLeft = document.getElementById("timer")
    var x = setInterval(function() {
        seconds--;
        var secondsString = seconds.toString();
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
    scoreDiv.style.display = "block";
    totalScore.innerHTML = "Your final score is " + seconds;
}

// SAVING HIGHSCORES
var userInitals = document.getElementById("user-initials");
var submitScore = document.getElementById("submitScore");

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

submitScore.addEventListener("click", function(submitScore){
    event.preventDefault();

    var user = {
        initials: userInitals.value.trim(),
        score: seconds,
    }
    console.log(user)
    highScores.push(user)
    
    localStorage.setItem("highScores", JSON.stringify(highScores));
    console.log(highScores)
    window.location.assign("highscores.html")
    
})