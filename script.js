var beginButton = document.getElementById("begin-button");

beginButton.addEventListener("click", function(event){
    event.preventDefault();

    var timeClassEl = document.querySelector(".timer");
    var secondsLeft = 60;
    
    function setTime() {
        var timerInterval = setInterval(function () {
            secondsLeft--;
            timeClassEl.textContent = "Time: " + secondsLeft + " seconds left"

            if(secondsLeft === 0) {
                clearInterval(timerInterval);
            }
        }, 1000);
    }

    setTime();

    var removeText = document.getElementById("instructions-box");
    removeText.remove();
    var removeButton = document.getElementById("begin-button");
    removeButton.remove();

    var questionsParent = document.getElementById("main-body-sub");
    
    var firstQuestionDiv = document.createElement("div");
    firstQuestionDiv.classList.add("questionPrompt");

    var firstQuestionDivText = document.createTextNode("Commonly used data types DO NOT include:");

    firstQuestionDiv.appendChild(firstQuestionDivText);
    questionsParent.appendChild(firstQuestionDiv);


    var optionOne = document.createElement("button");
    optionOne.classList.add("optionButton1");
    var optionOneText = document.createTextNode("1. Strings");
    optionOne.appendChild(optionOneText);
    questionsParent.appendChild(optionOne);


    var optionTwo = document.createElement("button");
    optionTwo.classList.add("optionButton1");
    var optionTwoText = document.createTextNode("2. Booleans");
    optionTwo.appendChild(optionTwoText);
    questionsParent.appendChild(optionTwo);


    var optionThree = document.createElement("button");
    optionThree.classList.add("optionButton1");
    var optionThreeText = document.createTextNode("3. Alerts");
    optionThree.appendChild(optionThreeText);
    questionsParent.appendChild(optionThree);


    var optionFour = document.createElement("button");
    optionFour.classList.add("optionButton1");
    var optionFourText = document.createTextNode("4. Numbers");
    optionFour.appendChild(optionFourText);
    questionsParent.appendChild(optionFour);

    var optionsButton1Var = document.getElementsByClassName("optionButton1");
    for (var i = 0; i < optionsButton1Var.length; i++) {
        optionsButton1Var[i].addEventListener("click", function(event){
        event.preventDefault();
        firstQuestionDivText.textContent = "The condition in an if/else statement is enclosed with a:";
        optionOneText.textContent = "1. Quotes";
        optionOne.classList.replace("optionButton1","optionButton2");
        optionTwoText.textContent = "2. Curly Brackets";
        optionTwo.classList.replace("optionButton1","optionButton2");
        optionThreeText.textContent = "3. Parenthesis";
        optionThree.classList.replace("optionButton1","optionButton2");
        optionFourText.textContent = "4. Square Brackets";
        optionFour.classList.replace("optionButton1","optionButton2");

        var optionsButton2Var = document.getElementsByClassName("optionButton2");
        for (var o = 0; o < optionsButton2Var.length; o++) {
            optionsButton2Var[o].addEventListener("click", function(event){
            event.preventDefault();
            firstQuestionDivText.textContent = "Arrays in JavaScript can be used to store:";
            optionOneText.textContent = "1. Numbers and Strings";
            optionOne.classList.replace("optionButton2","optionButton3");
            optionTwoText.textContent = "2. Other Arrays";
            optionTwo.classList.replace("optionButton2","optionButton3");
            optionThreeText.textContent = "3. Booleans";
            optionThree.classList.replace("optionButton2","optionButton3");
            optionFourText.textContent = "4. All of the above";
            optionFour.classList.replace("optionButton2","optionButton3");

            var optionsButton3Var = document.getElementsByClassName("optionButton3");
            for (var u = 0; u < optionsButton3Var.length; u++) {
                optionsButton3Var[u].addEventListener("click", function(event){
                event.preventDefault();
                firstQuestionDivText.textContent = "String values must be enclosed within **answer** when being assigned to variables.";
                optionOneText.textContent = "1. Commas";
                optionOne.classList.replace("optionButton3","optionButton4");
                optionTwoText.textContent = "2. Curly Brackets";
                optionTwo.classList.replace("optionButton3","optionButton4");
                optionThreeText.textContent = "3. Quotes";
                optionThree.classList.replace("optionButton3","optionButton4");
                optionFourText.textContent = "4. Parenthesis";
                optionFour.classList.replace("optionButton3","optionButton4");

                var optionsButton4Var = document.getElementsByClassName("optionButton4");
                for (var y = 0; y < optionsButton4Var.length; y++) {
                    optionsButton4Var[y].addEventListener("click", function(event){
                    event.preventDefault();
                    firstQuestionDivText.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
                    optionOneText.textContent = "1. Javascript";
                    optionOne.classList.replace("optionButton4","optionButton5");
                    optionTwoText.textContent = "2. Terminal/Bash";
                    optionTwo.classList.replace("optionButton4","optionButton5");
                    optionThreeText.textContent = "3. For Loops";
                    optionThree.classList.replace("optionButton4","optionButton5");
                    optionFourText.textContent = "4. Console.log";
                    optionFour.classList.replace("optionButton4","optionButton5");
                })};       
            })};       
        })};
    })};


});

var timeClassEl = document.querySelector(".timer");
var timeIdEl = document.getElementById("timer");
var secondsLeft = 60;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeClassEl.textContent = "Time: " + secondsLeft + " seconds left"
    }, 1000)
}