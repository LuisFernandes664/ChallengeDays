

function ConverterParaReal() {
    let valorElement = document.getElementById("valor").value;
    let valorEmDolarNumerico = parseFloat(valorElement)
    let valorEmReal = valorEmDolarNumerico * 5
    
    let elementoValorConvertido = document.getElementById("valorConvertido")
    let valorConvertido = "O resultado em real é R$ "+valorEmReal

    elementoValorConvertido.innerHTML = valorConvertido
}

function ConverterParaDolar() {
    let valorElement = document.getElementById("valor").value;
    let valorNumerico = parseFloat(valorElement)
    let valorDolar = valorNumerico / 5;

    let elementoValorConvertido = document.getElementById("valorConvertido")
    let valorConvertido = "O resultado em Dolar é $ " + valorDolar

    elementoValorConvertido.innerHTML = valorConvertido
}