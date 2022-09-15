

function adicionarFilme() {
    let elementHTML = document.getElementById("filme").value;

    if ( elementHTML.endsWith(".jpg") ) {
        listaFilmes(elementHTML);
    } else {
        console.error("Algo Correu Mal")
    }
    document.getElementById("filme").value = ""
}


function listaFilmes(filme) {
    console.log(filme)
    let elementoFilmeFav = "<img src=' " + filme + "' >";
    let listaFilmes = document.getElementById("listaFilmes");

    listaFilmes.innerHTML += elementoFilmeFav
}