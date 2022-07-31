var beginButton = document.getElementById("begin-button");

beginButton.addEventListener("click", function(event){
    event.preventDefault();

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

    //////////////////////////////////////////////////////////////

    var optionOne = document.createElement("button");
    optionOne.classList.add("optionButton");

    var optionOneText = document.createTextNode("1. Strings");

    optionOne.appendChild(optionOneText);
    questionsParent.appendChild(optionOne);


    var optionTwo = document.createElement("button");
    optionTwo.classList.add("optionButton");

    var optionTwoText = document.createTextNode("2. Booleans");

    optionTwo.appendChild(optionTwoText);
    questionsParent.appendChild(optionTwo);


    var optionThree = document.createElement("button");
    optionThree.classList.add("optionButton");

    var optionThreeText = document.createTextNode("3. Alerts");

    optionThree.appendChild(optionThreeText);
    questionsParent.appendChild(optionThree);


    var optionFour = document.createElement("button");
    optionFour.classList.add("optionButton");

    var optionFourText = document.createTextNode("4. Numbers");

    optionFour.appendChild(optionFourText);
    questionsParent.appendChild(optionFour);
});
