// Deep Pomal
const wordArr = ["Spaces","Javascript","Outline","Timeline","Script","Port","Date","Assignment","Selection","Run","Terminal","Help","File","Edit","Explorer"]

var $ = function (id) { return document.getElementById(id); };
let score = 0;
// This will select a random word from our array
let currentWord =  wordArr[getRandomInt(wordArr.length)];
let totalTime = 30;

init();
function init(){
    $('word').innerHTML = currentWord
    $('timer').innerHTML = 'Time Left: 30s';
    $('score').innerHTML = 'Score: '+score;
    $('leader').addEventListener("click",navigateToLeader)
    
    $('input').focus();
    $("playAgain").addEventListener('click',displayTypeView);

    let enteredWord = document.getElementById("input");
    // This will be triggered when the user presses enter key
    enteredWord.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {  //this checks whether the pressed key is "Enter"
            checkWord(e);
        }
    });
    
    startTimer();
}
function startTimer(){
    let timerText = $('timer');
    
    // Here we will start interval and when totalTime is 1, it will clear the interval
    let timer = setInterval(()=>{
        if(totalTime==1){
            clearInterval(timer)
            displayResultView();
        }
        totalTime--;
        timerText.innerHTML = 'Time Left: '+totalTime+'s';
    },1000)
}
//The next 2 functions are to hide and display type view and result view. 
//These will be triggered after 30 second of given time or user clicks on play again on result view
function displayResultView(){
    $("container").style.display="none"; 
    $("resultcontainer").style.display="flex";  

    $('resultScore').innerHTML = 'Your Score: '+score;
    
}
function displayTypeView(){
    $("resultcontainer").style.display="none";  
    $("container").style.display="flex";  

    startTimer();
    $('input').focus();
    score=0;
    $('score').innerHTML = 'Score: '+score;
    totalTime = 30;
    $('timer').innerHTML = 'Time Left: 30s';
    
}
//function to get random int less than array's size
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
//This will check if entered word matches to the word displayed. It is case sensitive
function checkWord(e){
    if(e.target.value.length>0 && e.target.value === currentWord){
        $('error').innerHTML = '';
        $('input').value = '';

        currentWord =  wordArr[getRandomInt(wordArr.length)];
        $('word').innerHTML = currentWord
        score ++;
        $('score').innerHTML = 'Score: '+score;
    }
    else{
        $('error').innerHTML = 'Input does not match the word!';
    }
}
// This will navigate to leaderboard page and store score variable in myValue variable to be used in next page
function navigateToLeader(){
    localStorage.setItem("myValue", score);
    window.location.href = "leader.html";
}