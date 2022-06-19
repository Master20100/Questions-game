
//questions are stored in an object with keys question1, question2 and so on
var questions ={};
questions["question1"] = "Arrays in javascript can be used to store ?numbers and strings,other arrays,booleans,all the above.4";
questions["question2"] = "Commonly used data types do not include ?string,booleans,alerts,numbers.3";
questions["question3"] = "A very quesful tool used during development and debugging for printing content to the debugger is ?javascript,terminal/bash,forloop,console/bash.4";
questions["question4"] = "String values must be enclosed within?quotes,curely brackets,parenthesis,square brackets.1";
questionsAnswersPageCreator(questionsPreparer(questions["question1"]));
questionsAnswersPageCreator(questionsPreparer(questions["question2"]));
questionsAnswersPageCreator(questionsPreparer(questions["question3"]));
questionsAnswersPageCreator(questionsPreparer(questions["question4"]));

var myTime;
var currentArticle = 0 ;
var score= 0;
var articleCount = document.querySelectorAll("article").length-1;
document.getElementById("formSubmittion").addEventListener("click", function(event){
    event.preventDefault();
    const user = {
        name: document.getElementById("formSubmittion").value,
        score: score,
    }
    
    window.localStorage.setItem('user', JSON.stringify(user));
    alert(window.localStorage.getItem('user'));
    
    
  });

function hider(currentArticle){
    document.querySelector("section").children[currentArticle].style.display = "none";
    document.querySelector("section").children[currentArticle+1].style.display = "block";
    
}
const wrapper = document.querySelectorAll("button");
wrapper.forEach(button=>{button.addEventListener('click', function(event){
    if(event.target.id=='startquiz'){
        myTime = myTimer(60,gameOver);}    
        else{
            document.querySelector("#correct").style.display = "none";
            document.querySelector("#wrong").style.display = "none";
            if(event.target.value == "true"){
                document.querySelector("#correct").style.display = "block";
                score +=10;
            }
            else{
                var x = document.querySelector("#timer").innerHTML ;
                clearInterval(myTime);
                myTime = myTimer(x-10,gameOver);
                document.querySelector("#wrong").style.display = "block"; 
            }
            document.getElementById("finalScore").innerHTML = score;
            gameOver();
        }
        hider(currentArticle);
        currentArticle++; 
    }
    
    )              
}

);

//function that creates a timer according to the seconds you specify
function myTimer(mySeconds,functionToBeRepeated){
    var seconds = document.querySelector("#timer");
    var decrementSeconds = setInterval(
        function(){
            mySeconds--;
            seconds.innerHTML=mySeconds;
            functionToBeRepeated();
        },1000);
        return decrementSeconds;
    }
    function gameOver(){
        if(document.querySelector("#timer").innerHTML == 0 || currentArticle == articleCount)
        {
            clearInterval(myTime);
            document.querySelector("#timer").innerHTML = 0;}
            
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
        
        
        //function to create a page for the questions and answers,
        //it returns hidden pages according to the number of questions in the
        //questions object.
        function questionsAnswersPageCreator(questionsAnswers){
            var article = document.createElement('article');
            var parentNode = document.getElementById("questionsandchoices");
            var lastNode = document.getElementById("gameFinish");
            parentNode.insertBefore(article,lastNode) ;
            var questionHeader = document.createElement('h1');
            article.appendChild(questionHeader);
            var myKey = Object.keys(questionsAnswers)[0];
            questionHeader.innerHTML = myKey;
            var myAnswerObj = questionsAnswers[myKey];
            
            
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
        
