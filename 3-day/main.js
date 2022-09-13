

let numeroSecreto = parseInt(Math.random()*11);
let numTemp = 0;

function Chutar() {

    let elementTry = document.getElementById("tentativas")
    
    
   
    console.log(numTemp)
    let elementValor = parseInt(document.getElementById("valor").value)

    let elementHTML = document.getElementById("resultado");

    if(elementValor == numeroSecreto) {
        elementTry.innerHTML = "Tentativas: " + numTemp
        elementHTML.innerHTML = "Acertou"
    } else if(elementValor > 10 || elementValor < 0){
        elementTry.innerHTML = "Tentativas: " + numTemp
        elementHTML.innerHTML = "Deve digitar um valor abaixo de 0 a 10";
    } else {
        numTemp ++;
        elementTry.innerHTML = "Tentativas: " + numTemp
        elementHTML.innerHTML = "Errou, o numero secreto era " + numeroSecreto
    }
}