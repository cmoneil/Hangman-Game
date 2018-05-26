// Creates an array that lists out all of the options
var hangWords = ["RADIOHEAD", "NIRVANA", "CRANBERRIES", "TUPAC", "FRIENDS", "CLUELESS", "TITANIC"]
var hangGifs =['assets/images/radioheadGif.webp', 'assets/images/nirvanaGif.gif', 'assets/images/cranberriesGif.webp', 'assets/images/tupacGif.gif', 'assets/images/friendsGif.gif', 'assets/images/cluelessGif.webp', 'assets/images/titanicGif.webp']
// Creating variables to hold the number of wins and guesses.
var wins = 0;
var losses = 0;
var guesses;
var chosenHangWord;
var hangWordLetters;
var letterGuessed = [];
var userGuess;
var guessArray = [];
var blanks;
var wrongGuesses = [];
var wordNumber;
// Randomly chooses a choice from the options array. This is the Computer's guess.

//gives the dashes for the chosen word
var dashArray = [];



function startGame() {
    guesses = 10;
    wordNumber = Math.floor(Math.random() * hangWords.length);
    chosenHangWord = hangWords[wordNumber]
    hangWordLetters = chosenHangWord.split('');
    blanks = chosenHangWord.length;
    wrongGuesses = [];
    dashArray = [];

    document.getElementById("dashArray").innerHTML = dashArray.join(' ');

    document.getElementById("numberLeft").innerHTML = guesses;

    document.getElementById("letterGuessed").innerHTML = letterGuessed.join(' ')
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;

    for (var i = 0; i < blanks; i++) {
        dashArray.push('-');
    }
    document.getElementById("dashArray").innerHTML = dashArray.join(' ');
    console.log(chosenHangWord)

};



function letterCheck(letter){
    var letterInWord = false;
    for (var i = 0; i <blanks; i++) {
        if (chosenHangWord[i] === letter){
            letterInWord = true;
        }
    }
    if (letterInWord){
        for (var j = 0; j <blanks; j++) {
            if (chosenHangWord[j] === letter) {
                dashArray[j] = letter;
            }
        }
    }
    else {
        if (wrongGuesses.indexOf(letter)== -1) {
            wrongGuesses.push(letter);
            guesses--;
        }
        else{ 
            alert(letter + " was already guessed")
        };
        //wrongGuesses.push(letter);
        

    }
    
}

function round() {

console.log("WinCount: " + wins + " | LossCount: " + losses + " | NumGuesses: " + guesses);
    document.getElementById("numberLeft").innerHTML = guesses;

    document.getElementById("dashArray").innerHTML = dashArray.join(' ');

    document.getElementById("letterGuessed").innerHTML = wrongGuesses.join(' ');
    console.log(wrongGuesses)

  
    
};
function winScreen(){
    content = `CORRECT! The answer was ${chosenHangWord}</br>
    <img src = ${hangGifs[wordNumber]} class='image-fluid pic'>`;

    document.getElementById("picture").innerHTML = content;
    
}

document.onkeyup = function (event) {
    // Determines which key was pressed.
    userGuess = event.key.toUpperCase();
    
    console.log(userGuess)
    console.log(guessArray);
    console.log('keyup', userGuess);
    

    console.log(event.keyCode)

    if (event.keyCode < 64 || event.keyCode > 91) {
        return;
    }

    
    console.log(guessArray)
    letterCheck(userGuess);
    console.log(dashArray);
    
    guessArray.forEach(function (element) {
        
        console.log(element);
        if (userGuess !== element)
            console.log(false)
    })
    round();
     if (dashArray.indexOf("-") == -1) {
        wins ++;
        document.getElementById("wins").innerHTML=wins;
        winScreen();
        startGame();
     }
     else if (dashArray.indexOf("-") !== -1 && guesses == 0){
         losses++;
         document.getElementById("losses").innerHTML=losses;
        startGame();
     }
         
     

     
     
     
};




//Don't push to guesses array or count against guess if 

// hangWordArray.forEach(function (letter, index) {
//     var guessMatches = userGuess === letter;

//     console.log('keyup foreach', guessMatches);
//     console.log(letter);


//     if (!guessMatches) {
//         return;
//     }

//     console.log(letterGuessed.indexOf(userGuess));



//     console.log(guessMatches);

//     dashArray[index] = letter;

//     console.log(guesses);

// });

startGame();