
let rafa = {nome: 'Rafa', vitorias: 2, empates: 1, derrotas: 1, pontos: 0};

let paulo = {nome: 'Paulo', vitorias: 1, empates: 1, derrotas: 2, pontos: 0};

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);

function calculaPontos(player) {
    let pontos = (player.vitorias * 3) + player.empates;
    return pontos;
}

let jogadores = [rafa, paulo];

function exibeJogadoresHtml(jogadores){

    let element = "";

    for( let i = 0; i < jogadores.length; i++ ){

        element += `
            <tr>
                <td>${jogadores[i].nome}</td>
                <td>${jogadores[i].vitorias}</td>
                <td>${jogadores[i].empates}</td>
                <td>${jogadores[i].derrotas}</td>
                <td>${jogadores[i].pontos}</td>
                <td><button onClick="adicionarVitoria()">Vitória</button></td>
                <td><button onClick="adicionarEmpate()">Empate</button></td>
                <td><button onClick="adicionarDerrota()">Derrota</button></td>
            </tr>
        `
    }
    console.log(element)
    let tabelaJogadores = document.getElementById("tabelaJogadores");

    console.log(tabelaJogadores)
    tabelaJogadores.innerHTML = element;
}

exibeJogadoresHtml(jogadores)











