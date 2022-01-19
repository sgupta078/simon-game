
// Shubham Gupta 
// Insta-ID : sgupta078

// 0 green
// 1 red
// 2 yellow
// 3 pink


// variables required

var btnColours = ["green", "red", "yellow", "pink"];
var gameColourPattern = [];
var userClicked = [];

var start = 0;
var level = 0;


// game start

document.querySelector("body").addEventListener("keypress", function(){

    if(start == 0){
        document.querySelector("h1").textContent = "Level " + level;
        setTimeout(function(){
            next();
        }, 500);
        start = 1;  // keypress will only work when there is no any previous keypress in ongoing game
    }

});


// generating random colours

function next() {
    var ran_num = Math.floor(Math.random() * 4);
    var ran_col = btnColours[ran_num];
    gameColourPattern.push(ran_col);
    playSound(ran_col);
    animateSelect(ran_col);
    level = level + 1;
    document.querySelector("h1").textContent = "Level " + level;
}


// what happens when user clicks on buttons

for(var i = 0; i<4; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click", function(event){
        var userChosenColour = this.getAttribute("id");
        userClicked.push(userChosenColour);
        playSound(userChosenColour);
        animateCLick(userChosenColour);
        checkAnswers(userClicked.length - 1);
    })
}


// check user clicked on correct button

function checkAnswers(currLvl) {

    if( gameColourPattern[currLvl] == userClicked[currLvl] ) {

        if( gameColourPattern.length == userClicked.length ) {

            userClicked = [];
            setTimeout(function(){
                next();
            }, 1000)
        }
    } else {
        var wrong = "wrong";
        playSound(wrong);
        document.querySelector("h1").textContent = "Game-Over☹ Press any key to start again";
        document.querySelector("body").classList.add("game-over");
        setTimeout(function(){
            document.querySelector("body").classList.remove("game-over");
        }, 500)

        startAgain();
    }

}


// playing sound

function playSound(audioName){
    var audio = new Audio("./sounds/" + audioName +".mp3");
    audio.play();
}


// giving animations

function animateCLick(boxID){
    document.querySelector("#" + boxID).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("#" + boxID).classList.remove("pressed")
    }, 100)
}

function animateSelect(boxID){
    document.querySelector("#" + boxID).classList.add("selected");

    setTimeout(function(){
        document.querySelector("#" + boxID).classList.remove("selected");
    }, 100)
}


// restart game

function startAgain(){
    start = 0;
    userClicked = [];
    gameColourPattern = [];
    level = 0;
}




// Shubham Gupta 
// Insta-ID : sgupta078