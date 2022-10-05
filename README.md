# Assignment_4
My program html is divided into 
a)a header that has the highscore tab and timer that has the time.
b)A section which has many articles.
first article represents the opening page. This is then followed by many articles, each represents a question with answers. Then the last 2 articles are the finish game article, then the high score article.
c)A footer that has the correct and wrong section depending on your answer, it will show if you answered right or wrong.

My javascript file has many functions, I will list them here for clarification.
a)questionsPreparer, it takes a full sentence in a special format, then converts it to an object that has a key representing the question and a value representing another object(that object has 4 keys, each has a value of either true or false). This functions split the sentence into a question and 4 answers

for example
"Arrays in javascript can be used to store ?numbers and strings,other arrays,booleans,all the above.4";
my questionsPreparer function, splits the sentence above to question(the sentence until the question mark), the answers which is the sentence before the comma and detects the correct answer according to the number at the end of the sentence, here for example, correct answer is number 4. Then it puts true for the value of the answer number 4.

b)questionsAnswersPageCreator: this function creates an article, then inserts into it a header and put the question inside, then creates 4 buttons, each has the answer.

c)timer: this function accepts, 2 parameters. The first is how many seconds would the timer starts with and the second parameter is if we would like to put a function that we want to run every second like our timer. 

d)gameOver: this function checks if timer reaches 0 or if we finished all the questions.


e)hider function that hides the current article and displays the next article. This is inserted in the event listeners of the button clicks to control the flow of the program.

All buttons were wrapped and then an event listener of click is linked to them.
If the first button that is start quiz is clicked, the timer is fired with the game over function, so the time keeps decreasing by seconds and the gameOver function keeps checking if timer gets to 0 or the program reached the end of the questions. gameOver function then resets the timer to 0 and moves the program to the game finish article.

All buttons have been wrapped to be able to add event listerner to them all

then, it checks whats the button id
a) if it is the start button, then timer is activated and the hider function is fired as well to move to the next page.
b)if the clear score button, the local storage is cleared
c)if go back button is pressed, timer and current article are resetted.
d)Otherwise, will check the button value, if correct will display correct and increase score by 10 and if wrong, will decrease timer by 10 second.

All scores with the initials are to be added to local storage and in the high score page, an iterator over keys is used to create a list item and put it under the high score text.

github link : https://github.com/Master20100/Questions-game
live link : https://master20100.github.io/Questions-game/