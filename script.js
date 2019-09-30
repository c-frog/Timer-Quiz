
// MAKING AN OBJECT FOR EACH QUESTION

var question1 = {
    q: "q",
    a1: "a1",
    a2: "a2",
    a3: "a3",
    a4: "a4",
};
var question2 = {
    q: "q",
    a1: "a1",
    a2: "a2",
    a3: "a3",
    a4: "a4",
};
var question3 = {
    q: "q",
    a1: "a1",
    a2: "a2",
    a3: "a3",
    a4: "a4",
};
var question4 = {
    q: "q",
    a1: "a1",
    a2: "a2",
    a3: "a3",
    a4: "a4",
};
var question5 = {
    q: "q",
    a1: "a1",
    a2: "a2",
    a3: "a3",
    a4: "a4",
};


let questionArr =[question1, question2, question3, question4, question5]

function question(questionaArr) {
    for (let index = 0; index < questionArr.length; index++) {
        const question = questionArr[index]; // questionArr[1] === {question1}
        let textArea = document.createElement("div");
        let newQuestion = document.createElement("p");
        newQuestion.innerHTML = question
    }

    //loop through every question
    // show a random question/answer pair

}