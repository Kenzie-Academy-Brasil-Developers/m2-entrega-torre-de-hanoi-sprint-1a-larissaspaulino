const container = document.getElementById('container');
const ulButtons = document.getElementById('ulButtons');

const arrTorres = ["torre1", "torre2", "torre3"]

function criarTorres (torreID){

    const torre = document.createElement('section')

    torre.id = torreID

    const hanoi = document.getElementById('container')

    hanoi.appendChild(torre)
}
arrTorres.forEach(criarTorres)

// Discos
const arrDisco = ["disco5","disco4","disco3", "disco2", "disco1"] //É preciso tirar o comentário disso.
// const arrDisco = ["disco3", "disco2", "disco1"] //É preciso comentar isso.

function criarDisco(discoID){

    const disco = document.createElement('div')
    disco.id = discoID

    const torre = document.getElementById("torre1")
   
    torre.appendChild(disco)
}
// arrDisco.forEach(criarDisco) //É preciso comentar isso para descomentar as funções.

//Reset
const footer = document.createElement('footer')
document.body.appendChild(footer)

const buttonResetar = document.createElement('button')
buttonResetar.id = "reset"
buttonResetar.innerText = "Resetar"
footer.appendChild(buttonResetar)

//Dificuldades
const dificuldades = ["easy", "normal", "hard"]

function criarDificuldades (dificuldades){

    const buttonsDificulty = document.createElement("button")
    buttonsDificulty.innerText = dificuldades
    buttonsDificulty.id = dificuldades

    const niveisCriados = document.getElementById("topo")

    ulButtons.appendChild(buttonsDificulty)
}
dificuldades.forEach(criarDificuldades)
 
//Dificuldades - Funções para criar os jogos com base nos botões de dificuldades.
let discoMenorVitoria = ''

function criarJogoFacil (event){
    for(let i = 0; i < 3; i++){
        criarDisco(arrDisco[i])
    }
    quantidadeDiscos = 3
    discoMenorVitoria = "disco3"
    console.log(quantidadeDiscos)
    console.log(discoMenorVitoria)
}

const jogoFacil = document.getElementById('easy')

jogoFacil.addEventListener('click', criarJogoFacil)
//
function criarJogoMedio (event){
    for(let i = 0; i < 4; i++){
        criarDisco(arrDisco[i])
    }
    quantidadeDiscos = 4
    discoMenorVitoria = "disco2"
    console.log(quantidadeDiscos)
    console.log(discoMenorVitoria)
}

const jogoMedio = document.getElementById('normal')

jogoMedio.addEventListener('click', criarJogoMedio)
//
function criarJogoDificil (event){
    for(let i = 0; i < arrDisco.length; i++){
        criarDisco(arrDisco[i])
    }
    quantidadeDiscos = 5
    discoMenorVitoria = "disco1"
    console.log(quantidadeDiscos)
    console.log(discoMenorVitoria)
}
const jogoDificil = document.getElementById('hard')

jogoDificil.addEventListener('click', criarJogoDificil)
