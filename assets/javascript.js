

//questions are stored in an object with keys question1, question2 and so on
var questions ={};
questions["question1"] = "Arrays in javascript can be used to store ?numbers and strings,other arrays,booleans,all the above.4";
questions["question2"] = "Commonly used data types do not include ?string,booleans,alerts,numbers.3";
questions["question3"] = "A very quesful tool used during development and debugging for printing content to the debugger is ?javascript,terminal/bash,forloop,console/bash.4";
questions["question4"] = "String values must be enclosed within?quotes,curely brackets,parenthesis,square brackets.1";



var startQuizButton = document.getElementById("startquiz");
startQuizButton.addEventListener("click",function(event){hider("openingpage");event.stopPropagation();});
startQuizButton.addEventListener("click",function(event){var myTime =myTimer(60); event.stopPropagation();
});
startQuizButton.addEventListener("click",function(event){  event.stopPropagation();
    document.querySelector("#questionsandchoices").children[0].style.display="block"});
for (let index = 0; index < document.getElementById("questionsandchoices").children.length; index++) {
    
}







questionsAnswersPageCreator(questionsPreparer(questions["question1"]));
questionsAnswersPageCreator(questionsPreparer(questions["question2"]));
questionsAnswersPageCreator(questionsPreparer(questions["question3"]));
questionsAnswersPageCreator(questionsPreparer(questions["question4"]));

const wrapper = document.querySelector('#questionsandchoices');
wrapper.addEventListener('click', function myFunction(event){
    event.stopPropagation();
    if(event.target.tagName == "BUTTON"){

    if(event.target.value == "true"){
        document.querySelector("#correct").style.display = "block";
       
    }
        else{
            document.querySelector("#wrong").style.display = "block";
            var x = document.querySelector("#timer").innerHTML ;
            
            myTimer(x-10);        
        }
        
    
        
        for (let index = 0; index < 4; index++) {
            
    if(window.getComputedStyle(document.querySelectorAll('article')[index]).display == 'block'){
        
        document.querySelectorAll('article')[index].style.display = "none";
        document.querySelectorAll('article')[index+1].style.display = "block";
        break;
        
    }
         }
    }

    });




//function that creates a timer according to the seconds you specify
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

//function to trim long string into questions and answers
//it will create an object which has for example question1 as the key and the value will be
//another object that has every key as the answer, then the value true for the correct
//answer 
function questionsPreparer(fullScentence){
    const fullScentenceMinusAnswer = fullScentence.split(".");
    const correctAnswer = fullScentenceMinusAnswer[1]-1;
    const fullScentenceSplit = fullScentenceMinusAnswer[0].split("?");
    var question = fullScentenceSplit[0]+"?";
    var myAnswers = fullScentenceSplit[1].split(",");
    var questionsAnswers = {};
    var myAnswersObj = {};
    for (let i = 0; i < myAnswers.length; i++) {
        if(i === correctAnswer){
            myAnswersObj[myAnswers[i]] = true;
        }
        else{
            myAnswersObj[myAnswers[i]] = false;
        }
    }
    
    questionsAnswers[question]=myAnswersObj;
    return questionsAnswers;
}

//function to hide an html element based on id name
function hider(htmlidname){
    var idName="#"+htmlidname;
    var elementToHide = document.querySelector(idName);
    elementToHide.style.display = "none";
}

//function to create a page for the questions and answers,
//it returns hidden pages according to the number of questions in the
//questions object.
function questionsAnswersPageCreator(questionsAnswers){
    var article = document.createElement('article');
    document.getElementById("questionsandchoices").appendChild(article);
    var questionHeader = document.createElement('h1');
    article.appendChild(questionHeader);
    var myKey = Object.keys(questionsAnswers)[0];
    questionHeader.innerHTML = myKey;
    var myAnswerObj = questionsAnswers[myKey];
    


    // var myAnswersList = document.createElement('ol');
    
    for (const key in myAnswerObj) {
     var answerList = document.createElement('button');
    answerList.style.display = "block";
    
     answerList.innerHTML = key;
     answerList.value = myAnswerObj[key];
     
     article.appendChild(answerList);       
    }
    //hide the article(contains questions and answers)
    article.style.display = "none";
}
