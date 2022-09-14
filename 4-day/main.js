

let listaFilmes = [
    "https://upload.wikimedia.org/wikipedia/pt/7/79/Yesterday_%282019%29_poster.jpg",
    "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/90/98/20169244.jpg"]

listaFilmes.forEach((element) => {
    document.write("<img src="+element+">")
})



/* ////////////////    TESTES ///////////////////

let listaFilmes = ["Yesterday", "A chegada", "Escola de Rock"]

listaFilmes.push("Harry Potter")
/*
document.write("<p>" + listaFilmes[0] + "</p>")
document.write("<p>" + listaFilmes[1] + "</p>")
document.write("<p>" + listaFilmes[2] + "</p>")
document.write("<p>" + listaFilmes[3] + "</p>")
*/

// LOOP FOREACH
/*
listaFilmes.forEach( (element) => {
    document.write("<p>" + element + "</p>")
})
*/
// FOR LOOP
/*
for( let i = 0 ; i < listaFilmes.length ; i++ ){
    document.write("<p>" + listaFilmes[i] + "</p>")
}
*/