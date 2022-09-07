
let nome = 'Luis'
let firstNote = 8
let secondNote = 5
let finalNote = (firstNote + secondNote)/2

let fixedNote = finalNote.toFixed(2)

console.log("Bem Vindo " + nome)

if(fixedNote < 5){
    console.log("Reprovado: "+fixedNote)
}else{
    console.log("Aprovado: "+fixedNote)
}


