var beginButton = document.getElementById("begin-button");
var wrongAnswer;
var rightAnswer;
var firstQuestionDivText = document.createTextNode("Commonly used data types DO NOT include:");
var optionOneText = document.createTextNode("1. Strings");
var optionOne = document.createElement("button");
var optionTwoText = document.createTextNode("2. Booleans");
var optionTwo = document.createElement("button");
var optionThreeText = document.createTextNode("3. Alerts");
var optionThree = document.createElement("button");
var optionFourText = document.createTextNode("4. Numbers");
var optionFour = document.createElement("button");
var secondsLeft = 60;
var timerInterval;

// wrongAnswerClicked - wrongAnswerClicked5 Selects what is wrong/right answer and executes the appropriate function
function wrongAnswerClicked() {
    wrongAnswer = document.querySelectorAll(".wrong-answer");
    rightAnswer = document.querySelector(".right-answer");
    console.log("wrong answer clicked is called1");
    for (var x = 0; x < wrongAnswer.length; x++) {
        wrongAnswer[x].addEventListener("click", subtractTenSeconds);
        wrongAnswer[x].addEventListener("click", secondQuestion);
    }; 
    rightAnswer.addEventListener("click", secondQuestion);
}; 

function wrongAnswerClicked2() {
    resetListener();
    wrongAnswer = document.querySelectorAll(".wrong-answer");
    rightAnswer = document.querySelector(".right-answer");
    console.log("wrong answer clicked is called2", wrongAnswer, rightAnswer);
    for (var x = 0; x < wrongAnswer.length; x++) {
        wrongAnswer[x].addEventListener("click", subtractTenSeconds);
        wrongAnswer[x].addEventListener("click", thirdQuestion);
    }; 
    console.log(secondsLeft);
    rightAnswer.addEventListener("click", thirdQuestion);
}; 

function wrongAnswerClicked3() {
    resetListener2();
    wrongAnswer = document.querySelectorAll(".wrong-answer");
    rightAnswer = document.querySelector(".right-answer");
    console.log("wrong answer clicked is called3", wrongAnswer, rightAnswer);
    for (var x = 0; x < wrongAnswer.length; x++) {
        wrongAnswer[x].addEventListener("click", subtractTenSeconds);
        wrongAnswer[x].addEventListener("click", fourthQuestion);
    }; 
    console.log(secondsLeft);
    rightAnswer.addEventListener("click", fourthQuestion);
}

function wrongAnswerClicked4() {
    resetListener3();
    wrongAnswer = document.querySelectorAll(".wrong-answer");
    rightAnswer = document.querySelector(".right-answer");
    console.log("wrong answer clicked is called4", wrongAnswer, rightAnswer);
    for (var x = 0; x < wrongAnswer.length; x++) {
        wrongAnswer[x].addEventListener("click", subtractTenSeconds);
        wrongAnswer[x].addEventListener("click", fifthQuestion);
    }; 
    rightAnswer.addEventListener("click", fifthQuestion);
}

function wrongAnswerClicked5() {
    resetListener4();
    wrongAnswer = document.querySelectorAll(".wrong-answer");
    rightAnswer = document.querySelector(".right-answer");
    console.log("wrong answer clicked is called5", wrongAnswer, rightAnswer);
    for (var x = 0; x < wrongAnswer.length; x++) {
        wrongAnswer[x].addEventListener("click", subtractTenSeconds);
        wrongAnswer[x].addEventListener("click", gameOver);
    }; 
    rightAnswer.addEventListener("click", gameOver);
}

// resetListener - resetListener4 Removes the event listener for each answer option when new page is entered
function resetListener () {
    for (var x = 0; x < wrongAnswer.length; x++) {
        wrongAnswer[x].removeEventListener("click", subtractTenSeconds);
        wrongAnswer[x].removeEventListener("click", secondQuestion);
    };
    rightAnswer.removeEventListener("click", secondQuestion);
    console.log("reset");   
}

function resetListener2 () {
    for (var x = 0; x < wrongAnswer.length; x++) {
        wrongAnswer[x].removeEventListener("click", subtractTenSeconds);
        wrongAnswer[x].removeEventListener("click", thirdQuestion);
    };
    rightAnswer.removeEventListener("click", thirdQuestion);
    console.log("reset");   
}

function resetListener3 () {
    for (var x = 0; x < wrongAnswer.length; x++) {
        wrongAnswer[x].removeEventListener("click", subtractTenSeconds);
        wrongAnswer[x].removeEventListener("click", fourthQuestion);
    };
    rightAnswer.removeEventListener("click", fourthQuestion);
    console.log("reset");   
}

function resetListener4 () {
    for (var x = 0; x < wrongAnswer.length; x++) {
        wrongAnswer[x].removeEventListener("click", subtractTenSeconds);
        wrongAnswer[x].removeEventListener("click", fifthQuestion);
    };
    rightAnswer.removeEventListener("click", fifthQuestion);
    console.log("reset");   
}

var timeClassEl = document.querySelector(".timer");

// Sets the timer
function setTime() {
        timerInterval = setInterval(function () {
        secondsLeft--;
        timeClassEl.textContent = "Time: " + secondsLeft + " seconds left"

        if(secondsLeft === 0) {
            gameOver();
            clearInterval(timerInterval);
        }
    }, 1000);
};

function subtractTenSeconds () {
    console.log("subtr");
    secondsLeft = secondsLeft - 10;
    console.log(secondsLeft);
}

// function for when begin button is pressed
beginButton.addEventListener("click", function(event){
    event.preventDefault();

    setTime();

    var removeText = document.getElementById("instructions-box");
    removeText.remove();
    var removeButton = document.getElementById("begin-button");
    removeButton.remove();

    var questionsParent = document.getElementById("main-body-sub");
    
    var firstQuestionDiv = document.createElement("div");
    firstQuestionDiv.classList.add("questionPrompt");

    // creates the first question
    firstQuestionDivText = document.createTextNode("Commonly used data types DO NOT include:");

    firstQuestionDiv.appendChild(firstQuestionDivText);
    questionsParent.appendChild(firstQuestionDiv);

    // creates answer options
    optionOne = document.createElement("button");
    optionOne.classList.add("optionButton1", "wrong-answer");
    optionOneText = document.createTextNode("1. Strings");
    optionOne.appendChild(optionOneText);
    questionsParent.appendChild(optionOne);

    optionTwo = document.createElement("button");
    optionTwo.classList.add("optionButton1", "wrong-answer");
    optionTwoText = document.createTextNode("2. Booleans");
    optionTwo.appendChild(optionTwoText);
    questionsParent.appendChild(optionTwo);

    optionThree = document.createElement("button");
    optionThree.classList.add("optionButton1", "right-answer");
    optionThreeText = document.createTextNode("3. Alerts");
    optionThree.appendChild(optionThreeText);
    questionsParent.appendChild(optionThree);

    optionFour = document.createElement("button");
    optionFour.classList.add("optionButton1", "wrong-answer");
    optionFourText = document.createTextNode("4. Numbers");
    optionFour.appendChild(optionFourText);
    questionsParent.appendChild(optionFour);

    wrongAnswerClicked();
});

// executes the second question
function secondQuestion () {
    console.log("2 called");
    var optionsButton1Var = document.getElementsByClassName("optionButton1");
    console.log(optionsButton1Var, optionsButton1Var.length);
        console.log("inside secondQuestion");
        firstQuestionDivText.textContent = "The condition in an if/else statement is enclosed with a:"; 
        optionOneText.textContent = "1. Quotes";
        optionOne.classList.replace("optionButton1","optionButton2");
        optionTwoText.textContent = "2. Curly Brackets";
        optionTwo.classList.replace("optionButton1","optionButton2");
        optionThreeText.textContent = "3. Parenthesis";
        optionThree.classList.replace("optionButton1","optionButton2");
        optionFourText.textContent = "4. Square Brackets";
        optionFour.classList.replace("optionButton1","optionButton2");
        wrongAnswerClicked2();
};

// executes the third question
function thirdQuestion () {   
    console.log("3 called");
        var optionsButton2Var = document.getElementsByClassName("optionButton2");
        console.log(optionsButton2Var);
            firstQuestionDivText.textContent = "Arrays in JavaScript can be used to store:";
            optionOneText.textContent = "1. Numbers and Strings";
            optionOne.classList.replace("optionButton2","optionButton3");
            optionTwoText.textContent = "2. Other Arrays";
            optionTwo.classList.replace("optionButton2","optionButton3");
            optionThreeText.textContent = "3. Booleans";
            optionThree.classList.replace("optionButton2","optionButton3");
            optionThree.classList.replace("right-answer","wrong-answer");
            optionFourText.textContent = "4. All of the above";
            optionFour.classList.replace("optionButton2","optionButton3");
            optionFour.classList.replace("wrong-answer", "right-answer");
            wrongAnswerClicked3();
};

// execute the fourth question
function fourthQuestion () {
    console.log("4 called");
            var optionsButton3Var = document.getElementsByClassName("optionButton3");
            console.log(optionsButton3Var);
                firstQuestionDivText.textContent = "String values must be enclosed within **answer** when being assigned to variables.";
                optionOneText.textContent = "1. Commas";
                optionOne.classList.replace("optionButton3","optionButton4");
                optionTwoText.textContent = "2. Curly Brackets";
                optionTwo.classList.replace("optionButton3","optionButton4");
                optionThreeText.textContent = "3. Quotes";
                optionThree.classList.replace("optionButton3","optionButton4");
                optionThree.classList.replace("wrong-answer", "right-answer");
                optionFourText.textContent = "4. Parenthesis";
                optionFour.classList.replace("optionButton3","optionButton4");
                optionFour.classList.replace("right-answer","wrong-answer");

                wrongAnswerClicked4();
};

// execeutes the fifth question
function fifthQuestion () {
    console.log("5 called");
                var optionsButton4Var = document.getElementsByClassName("optionButton4");
                console.log(optionsButton4Var);
                    firstQuestionDivText.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
                    optionOneText.textContent = "1. Javascript";
                    optionOne.classList.replace("optionButton4","optionButton5");
                    optionTwoText.textContent = "2. Terminal/Bash";
                    optionTwo.classList.replace("optionButton4","optionButton5");
                    optionThreeText.textContent = "3. For Loops";
                    optionThree.classList.replace("optionButton4","optionButton5");
                    optionThree.classList.replace("right-answer","wrong-answer");
                    optionFourText.textContent = "4. Console.log";
                    optionFour.classList.replace("optionButton4","optionButton5");
                    optionFour.classList.replace("wrong-answer", "right-answer");

                    wrongAnswerClicked5();
};

// ends game and allows user to store their score into local storage
function gameOver () {
    clearInterval(timerInterval);
    var finalScore = secondsLeft;
    timeClassEl.textContent = "Time: " + finalScore + " seconds left"
    firstQuestionDivText.textContent = "GAME OVER! Your final score is " + finalScore + "!";
    var removeAnswerOptions = document.querySelectorAll(".optionButton5");
    for (var i = 0; i < removeAnswerOptions.length; i++) {
        removeAnswerOptions[i].remove();
    };

    var userInitials = prompt("Please enter your initials to save your score.");
    var userInfo = {
        initials: userInitials,
        score: finalScore,
    };

    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    if (userInitials !=null) {
        console.log(localStorage.userInfo);
        var retrievedInfo = JSON.parse(localStorage.getItem("userInfo"));
        firstQuestionDivText.textContent = "Testing:" + retrievedInfo;
    };
};
