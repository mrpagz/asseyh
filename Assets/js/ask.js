// Var with array and object for questions 
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },
];
// Declared variables
var score = 0;
var questionIndex = 0;
var holdInterval;

// Start working code 
// Declared variables
// var currentTime = document.querySelector("#timer");
// var timer = document.querySelector("#startTime");
// var questionsDiv = document.querySelector("#question");
// var wrapper = document.querySelector("#container");

// Time duration in seconds for the whole quiz
var secondsLeft = 75;
// Holds interval time
// Penalty for incorrect answer
var penalty = 10;
// Creates new element

// Triggers timer on button, shows user a display on the screen
startQuiz.addEventListener("click", function () {
    // We are checking zero because its originally set to zero
    startPage.classList.add("hide")
    questionPage.classList.remove("hide")
    runTimer()
    render();
});

highScore.onclick = redirectHighscores
getInitials.onclick = handleScores

function redirectHighscores() {
    redirect.click()
}

function runTimer() {
    timer.textContent = "Time: " + secondsLeft;

    holdInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;

        if (secondsLeft <= 0) {
            allDone();
            timer.textContent = "Time's up!";
        }
    }, 1000);
}

// Renders questions and choices to page: 
function render() {
    question.textContent = questions[questionIndex].title

    answerList.innerHTML = '';
    for (var choice of questions[questionIndex].choices) {
        var btn = document.createElement('button')
        btn.textContent = choice
        btn.onclick = compare

        answerList.appendChild(btn)
    }

    // For loops to loop through all info in array
    // for (var i = 0; i < questions.length; i++) {
    //     // Appends question title only
    //     var userQuestion = questions[questionIndex].title;
    //     var userChoices = questions[questionIndex].choices;
    //     questionsDiv.textContent = userQuestion;
    // }
    // // New for each for question choices
    // userChoices.forEach(function (newItem) {
    //     var listItem = document.createElement("li");
    //     listItem.textContent = newItem;
    //     questionsDiv.appendChild(ulCreate);
    //     ulCreate.appendChild(listItem);
    //     listItem.addEventListener("click", (compare));
    // })
}
// Event to compare choices with answer
function compare() {
    var correct = questions[questionIndex].answer
    if (this.textContent === correct) {
        score++;
    }

    questionIndex++;
    if (questionIndex < questions.length) {
        render()
    } else {
        allDone()
    }
}
// function compare(event) {
//     var element = event.target;

//     if (element.matches("li")) {

//         var createDiv = document.createElement("div");
//         createDiv.setAttribute("id", "createDiv");
//         // Correct condition 
//         if (element.textContent == questions[questionIndex].answer) {
//             score++;
//             createDiv.textContent = "Correct! The answer is:  " + questions[questionIndex].answer;
//             // Correct condition 
//         } else {
//             // Will deduct -10 seconds off secondsLeft for wrong answers
//             secondsLeft = secondsLeft - penalty;
//             createDiv.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].answer;
//         }

//     }
//     // Question Index determines number question user is on
//     questionIndex++;

//     if (questionIndex >= questions.length) {
//         // All done will append last page with user stats
//         allDone();
//         createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
//     } else {
//         render(questionIndex);
//     }
//     questionsDiv.appendChild(createDiv);

// }
// All done will append last page
function allDone() {
    clearInterval(holdInterval)
    questionPage.classList.add('hide')
    resultsPage.classList.remove('hide')
}

function handleScores(){
    var inits = initials.value
    console.log(inits, score)
    

    // code local storage
    redirectHighscores()
}
// function allDone() {
//     questionsDiv.innerHTML = "";
//     currentTime.innerHTML = "";

//     // Heading:
//     var createH1 = document.createElement("h1");
//     createH1.setAttribute("id", "createH1");
//     createH1.textContent = "All Done!"

//     questionsDiv.appendChild(createH1);

//     // Paragraph
//     var createP = document.createElement("p");
//     createP.setAttribute("id", "createP");

//     questionsDiv.appendChild(createP);

//     // Calculates time remaining and replaces it with score
//     if (secondsLeft >= 0) {
//         var timeRemaining = secondsLeft;
//         var createP2 = document.createElement("p");
//         clearInterval(holdInterval);
//         createP.textContent = "Your final score is: " + timeRemaining;

//         questionsDiv.appendChild(createP2);
//     }

//     // Label
//     var createLabel = document.createElement("label");
//     createLabel.setAttribute("id", "createLabel");
//     createLabel.textContent = "Enter your initials: ";

//     questionsDiv.appendChild(createLabel);

//     // input initials
//     var createInput = document.createElement("input");
//     createInput.setAttribute("type", "text");
//     createInput.setAttribute("id", "initials");
//     createInput.textContent = "";

//     questionsDiv.appendChild(createInput);

//     // submitting initials
//     var createSubmit = document.createElement("button");
//     createSubmit.setAttribute("type", "submit");
//     createSubmit.setAttribute("id", "Submit");
//     createSubmit.textContent = "Submit";

//     questionsDiv.appendChild(createSubmit);

//     // Event listener to capture initials and local storage for initials and score
//     createSubmit.addEventListener("click", function () {
//         var initials = createInput.value;

//         if (initials === null) {

//             console.log("No value entered!");

//         } else {
//             var finalScore = {
//                 initials: initials,
//                 score: timeRemaining
//             }
//             console.log(finalScore);
//             var allScores = localStorage.getItem("allScores");
//             if (allScores === null) {
//                 allScores = [];
//             } else {
//                 allScores = JSON.parse(allScores);
//             }
//             allScores.push(finalScore);
//             var newScore = JSON.stringify(allScores);
//             localStorage.setItem("allScores", newScore);
//             // Showing you score (another html)
//             window.location.replace("index2.html");
//         }
//     });

// }