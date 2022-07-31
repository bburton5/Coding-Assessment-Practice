var beginButton = document.getElementById("begin-button");

beginButton.addEventListener("click", function(event){
    event.preventDefault();
    var firstQuestionDiv = document.createElement("div");

    var firstQuestionDivText = document.createTextNode("This is a test.");
    firstQuestionDiv.appendChild(firstQuestionDivText);

    var mainBodySub = document.getElementById("main-body-sub");
    document.appendChild(firstQuestionDiv, mainBodySub);
});
