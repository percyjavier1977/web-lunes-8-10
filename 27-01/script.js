const secretNumber = Math.floor(Math.random()*10)+1;
let intentos = 0;
const maxintentos = 3;

function jugar(){
    const guess = parseInt(document.getElementById("guess").value);
    const result = document.getElementById("result");

    if(isNaN(guess) || guess < 1 || guess > 10){
        result.textContent = "Por favor, ingresa un número válido entre 1 y 10";
        return; //sale de la función
    }

    intentos = intentos + 1;

    if (guess===secretNumber){
        result.textContent = "felicidades adivinaste el número";
        desactivar();
    }else if (intentos <  maxintentos){
        result.textContent = guess < secretNumber ? "Demaciado bajo. Intenta nuevamente":"Demaciado alto.Intenta nuevamente.";

    }else{
        result.textContent = `Has perdido, el número secreto era ${secretNumber}`;
        desactivar()
    }

    function desactivar(){
        document.getElementById("guess").disabled = true;
        document.querySelector("button").disabled = true;
    }





}
