const numIntentos = document.getElementById("attempts-num");
const hangmanDiv = document.getElementById("hangman-div");
const submitButton = document.getElementById("submit-button");
const wordGuessDiv = document.getElementById("word-guess-div");
const guessInput = document.getElementById("guess-input");
const wordDescriptionDiv = document.getElementById("word-description-div");

var guessed = "";
var guesses = 5;
var randVal = 0;

class concept {
    constructor(word, description) {
        this.word = word;
        this.description = description;
    }
}

var words = [new concept("observacion", "La capacidad de obtener información del entorno a través de la aplicación de los sentidos"),
    new concept("descripcion", "La capacidad de evocar un referente concreto en un tercero mediante el uso de un lenguaje"),
    new concept("comparacion", "La capacidad de poner en relación dos referentes concretos o abstractos y obtener información de ello"),
    new concept("relacion", "También llamada asociación consiste en el empleo de la memoria y la imaginación para hallar relaciones entre dos o más referentes"),
    new concept("clasificacion", "La posibilidad de establecer tipos y diferenciaciones entre un conjunto de referentes, para así permitir la aparición de información referente a ellos mismos")
    ];

function gameStart(){
    randVal = randomNumber(0, words.length);
    console.log(randVal);
    for(let i=0;i<words[randVal].word.length;i++){
        guessed+="#";
    }
    wordGuessDiv.innerHTML=guessed;
    wordDescriptionDiv.innerHTML=words[randVal].description;
    numIntentos.innerHTML=guesses;
}

function cycle(){
    let submittedAttempt = guessInput.value;
    guessInput.value = "";
    if(submittedAttempt.length==1){
        if(guesses>0){
            let coincidence = false;
            for(let i=0;i<words[randVal].word.length;i++){
                if(words[randVal].word.charAt(i)==submittedAttempt){
                    guessed = guessed.replaceAt(i,words[randVal].word.charAt(i));
                    console.log(guessed);
                    coincidence=true;
                }
            }
            if(!coincidence){
                guesses--;
                numIntentos.innerHTML=guesses;
            }
            wordGuessDiv.innerHTML=guessed;
        }
    }else{
        alert("Debe entrar solo una letra");
    }
    if(guessed===words[randVal].word){
        window.location.href = "victory.html";
    }
    if(!guesses>0){
        window.location.href = "defeat.html";
    }
}

function randomNumber(min, max) {
    const r = Math.random()*(max-min) + min;
    return Math.floor(r);
} 

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

gameStart();

submitButton.addEventListener("click", cycle);