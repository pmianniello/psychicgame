alert("look into my incredible hair, breathe deep and guess the secret number. are you as psychic as me? no definitely not but you may as well give it a try...");

var wins = 0;
console.log(wins);


var losses = 0;
console.log(losses);

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(alphabet);

var guessesMade = 0;


var guessesLeft = 10;
console.log(guessesLeft);


document.onkeyup = function(event)  {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    console.log(userGuess);
    
    if (secretLetter == userGuess)  {
    wins++;
    guessesLeft = 10;
    alert("wow, you're almost as incredible as Gary!");
    }

    else if (guessesLeft == 0) {
        losses++;
        alert("you're no gary spivey!");

    }

    else if (guessesLeft !== secretLetter)  {
        guessesLeft--;
    }
}


var secretLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
console.log(secretLetter);

