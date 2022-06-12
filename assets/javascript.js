function myTimer(mySeconds){
    var seconds = document.querySelector("#timer");
    var decrementSeconds = setInterval(
        function(){
            mySeconds--;
            seconds.innerHTML=mySeconds;
            if(mySeconds === 0){
            clearInterval(decrementSeconds);
            alert("You lost"); 
    }},1000);

}

myTimer(500);