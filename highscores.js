var list = document.getElementById("highscoresList");
var highscores = localStorage.getItem("highScores")
var scoresArr = JSON.parse(highscores);
console.log (scoresArr)

// FUNCTION RENDER SCORES
function renderScores() {
    list.innerText = "";
    
    for (let i = 0; i < scoresArr.length; i++) {
        var highScore = scoresArr[i];
        var initials = highScore.initials
        var score = highScore.score
        var li = document.createElement("li");
        li.textContent = initials + " " + score;
        li.setAttribute("data-index", i);

        list.appendChild(li);
    }
}
renderScores()

//CLEAR HIGH SCORES BUTTON
var clearBtn = document.getElementById("clearBtn")
    
clearBtn.addEventListener("click", function() {
    localStorage.clear()
    list.innerText = ""
})
