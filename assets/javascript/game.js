// Creates an array that lists out all of the options
var hangWords = ["RADIOHEAD", "NIRVANA", "CRANBERRIES", "TUPAC", "FRIENDS", "CLUELESS", "TITANIC"]
// Creating variables to hold the number of wins and guesses.
var wins = 0;
var guesses = 12;
var letterGuessed = [];

// Randomly chooses a choice from the options array. This is the Computer's guess.
var chosenHangWord = hangWords[Math.floor(Math.random() * hangWords.length)];

//gives the dashes for the chosen word
var dashArray = [];
var hangWordArray = chosenHangWord.split('');

console.log('1', chosenHangWord);

for (var i = 0; i < chosenHangWord.length; i++) {
    dashArray.push('-');
}

console.log('2', dashArray);

document.getElementById("dashArray").innerHTML = dashArray.join(' ');

// Generates the length of the choice from the array.
// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    // Determines which key was pressed.
    var userGuess = event.key.toUpperCase();

    console.log('keyup', userGuess);

    console.log(event.keyCode)

    if (event.keyCode < 64 || event.keyCode >91) {
        return;
    }

    
    

    hangWordArray.forEach(function (letter, index) {
        var guessMatches = userGuess === letter;
        console.log('keyup foreach', guessMatches);

        

        if (!guessMatches) {
            return;
        }

        console.log(letterGuessed.indexOf(userGuess));

        //attempt to not allow multiple guesses of same letter

        //if (letterGuessed.indexOf(userGuess) == -1 ){
        //    return;
        //}

        console.log(guessMatches);

        dashArray[index] = letter;

            console.log(guesses);

    });

    

    letterGuessed.push(userGuess);

    console.log(letterGuessed);

//if letterGuessed.indexOf()

    guesses = guesses - 1;

    document.getElementById("dashArray").innerHTML = dashArray.join(' ');

    document.getElementById("numberLeft").innerHTML = guesses;

    document.getElementById("letterGuessed").innerHTML = letterGuessed.join(' ')

    console.log(dashArray.length);
    console.log(chosenHangWord.length);

    //alerts win sort of
    
    if (chosenHangWord.length == letterGuessed.length) {
        alert("Win");
        wins = wins + 1;
    
    }

    document.getElementById("wins").innerHTML = wins;
    
    // attempt to get the game to account for wins
    
    

}

