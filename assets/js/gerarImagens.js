const container = document.getElementById('container');
const ulButtons = document.getElementById('ulButtons')
//Torres
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
//arrDisco.forEach(criarDisco) //É preciso comentar isso para descomentar as funções.

//Reset
const footer = document.createElement('footer')
document.body.appendChild(footer)

const buttonResetar = document.createElement('button')
buttonResetar.id = "reset"
buttonResetar.innerText = "Resetar"
footer.appendChild(buttonResetar)

//Dificuldades
const dificuldades = ["easy", "normal", "hard"]

function criarDificuldades (batatas){

    const buttonsDificulty = document.createElement("button")
    buttonsDificulty.innerText = batatas
    buttonsDificulty.id = batatas

    const niveisCriados = document.getElementById("topo")

    ulButtons.appendChild(buttonsDificulty)
}
dificuldades.forEach(criarDificuldades)
 
//Dificuldades - Funções para criar os jogos com base nos botões de dificuldades.

// function criarJogoFacil (evento){

//     for(let i = 0; i < 3; i++){
//         criarDisco(arrDisco[i])
//     }

// }

// const jogoFacil = document.getElementById('easy')

// jogoFacil.addEventListener('click', criarJogoFacil)
// //
// function criarJogoMedio (event){
//     for(let i = 0; i < 4; i++){
//         criarDisco(arrDisco[i])
//     }
// }

// const jogoMedio = document.getElementById('normal')

// jogoMedio.addEventListener('click', criarJogoMedio)
// //
// function criarJogoDificil (event){
//     for(let i = 0; i < arrDisco.length; i++){
//         criarDisco(arrDisco[i])
//     }
// }
// const jogoDificil = document.getElementById('hard')

// jogoDificil.addEventListener('click', criarJogoDificil)

// function criarJogo (nivelDificuldade) {

// }

