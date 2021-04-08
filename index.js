const numIntentos = document.getElementById("attempts-num");
const hangmanDiv = document.getElementById("hangman-div");
const submitButton = document.getElementById("submit-button");
const wordGuessDiv= document.getElementById("word-guess-div");
const guessInput= document.getElementById("guess-input");

var word = "hangman";
var guessed = "#######";
var guesses = 0;

function gameStart(){
    wordGuessDiv.innerHTML=guessed;
}

function cycle(){
    let submittedAttempt = guessInput.value;
    if(submittedAttempt.length==1){
        if(guesses<6){
            let coincidence = false;
            for(let i=0;i<word.length;i++){
                if(word.charAt(i)==submittedAttempt){
                    guessed = guessed.replaceAt(i,word.charAt(i));
                    console.log(guessed);
                    coincidence=true;
                }
            }
            if(!coincidence){
                guesses++;
            }
            wordGuessDiv.innerHTML=guessed;
        }
    }else{
        alert("Debe entrar solo una letra");
    }
    if(guessed===word){
        //document.location.href=document.location.href.splitOnLast('/')[0]+"/victory.html";
    }
    if(guesses>5){
        //document.location.href=document.location.href.splitOnLast('/')[0]+"/defeat.html";
    }
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

gameStart();

submitButton.addEventListener("click", cycle);