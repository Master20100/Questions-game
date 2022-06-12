function myTimer(mySeconds){
    var seconds = document.querySelector("#timer");
    var decrementSeconds = setInterval(
        function(){
            mySeconds--;
            seconds.innerHTML=mySeconds;
            if(mySeconds == 0){
                clearInterval(decrementSeconds);
                alert("You lost"); 
                }
            },1000);

}

myTimer(3000);

//questions are stored in an object with keys question1, question2 and so on
var questions ={};
questions["question1"] = "Arrays in javascript can be used to store ?numbers and strings,other arrays,booleans,all the above";
questions["question2"] = "Commonly used data types do not include ?string,booleans,alerts,numbers";
questions["question3"] = "A very quesful tool used during developping and debugging?javascript,terminal,forloop,console/bash";
questions["question4"] = "String values must be enclosed within?quotes,curely brackets,parenthesis,square brackets";



var startQuizButton = document.getElementById("startquiz");
startQuizButton.addEventListener("click",function(){hider("openingpage")});
startQuizButton.addEventListener("click",function(){document.querySelector("#questionsandchoices").children[0].style.display="block"});


//function to trim long string into questions and answers array
//since java script does not support functions that return multiple values
//I put question and answers array both in an array
//question is index of 0 and answers array is index of 1
function questionsPreparer(fullScentence){
    const fullScentenceSplit = fullScentence.split("?");
    var question = fullScentenceSplit[0]+"?";
    var myAnswers = fullScentenceSplit[1].split(",");
    var questionsAnswers = [];
    questionsAnswers[0]=question;
    questionsAnswers[1] = myAnswers;
    return questionsAnswers;
}
//function to create a page for the questions and answers,
//it returns hidden pages according to the number of questions in the
//questions object.
function questionsAnswersPageCreator(questionsAnswers){
    var article = document.createElement('article');
    document.getElementById("questionsandchoices").appendChild(article);
    var questionHeader = document.createElement('h1');
    article.appendChild(questionHeader);
    questionHeader.innerHTML = questionsAnswers[0];
    var myAnswersList = document.createElement('ol');

    for (let i = 0; i < questionsAnswers[1].length; i++) {
     var answerList = document.createElement('li');
     answerList.innerHTML = questionsAnswers[1][i];
     myAnswersList.appendChild(answerList);       
    }
    article.appendChild(myAnswersList);
    //hide the article(contains questions and answers)
    article.style.display = "none";
}



questionsAnswersPageCreator(questionsPreparer(questions["question1"]));
questionsAnswersPageCreator(questionsPreparer(questions["question2"]));
questionsAnswersPageCreator(questionsPreparer(questions["question3"]));
questionsAnswersPageCreator(questionsPreparer(questions["question4"]));


//function to hide an html element based on id name
function hider(htmlidname){
    var idName="#"+htmlidname;
    var elementToHide = document.querySelector(idName);
    elementToHide.style.display = "none";
}
