const containerTorres = document.getElementById('container')
const divPopUp = document.getElementById('popUpVitoria')
const botaoSair = document.getElementById('botaoSair')
const topo = document.getElementById('topo')


const displayContadorMov = document.createElement('aside')
displayContadorMov.innerText = 'Contador de Movimento: 0'
topo.appendChild(displayContadorMov)

let contadorClique = 0
let contadorMovimento = 0
let contadorChildElem = 0

let quantidadeDiscos = 0

let torreOrigem = 0
let discoOrigem = 0
let larguraDiscoOrigem = 0

let torre = 0

let torreDestino = 0
let discoDestino = 0
let larguraDiscoDestino = 0

function torreClicada(e) {
    let torre = e.target.closest('section')
    console.log(torre)
    contadorClique++
    console.log(contadorClique)
    torreOrigemouDestino(torre)
}

containerTorres.addEventListener('click', torreClicada)

function torreOrigemouDestino(torre) {
    if (contadorClique % 2 !== 0) {
        torreOrigem = torre
        discoOrigem = torreOrigem.lastElementChild
    } else {
        torreDestino = torre
        discoDestino = torreDestino.lastElementChild
        console.log(torreDestino)
        moverDiscoDeDiv(torreDestino)
        checkWin()
    }
}


function moverDiscoDeDiv(torreDestino) {
    console.log(torreDestino)
    if (discoDestino === null) {
        torreDestino.appendChild(discoOrigem)
        contadorChildElem = torreDestino.childElementCount
        contadorMovimento++
        displayContadorMov.innerHTML = `Contador de Movimento: ${contadorMovimento}`
    } else if (discoOrigem.clientWidth < discoDestino.clientWidth) {
        torreDestino.appendChild(discoOrigem)
        contadorChildElem = torreDestino.childElementCount
        contadorMovimento++
        displayContadorMov.innerHTML = `Contador de Movimento: ${contadorMovimento}`
    }
}

function checkWin() {
    let ultimoDisco = torreDestino.firstElementChild.getAttribute('id') //maior
    let primeiroDisco = torreDestino.lastElementChild.getAttribute('id')
    if (contadorChildElem === quantidadeDiscos && ultimoDisco === 'disco5' && primeiroDisco === discoMenorVitoria && torreDestino.getAttribute('id') !== 'torre1') {
        divPopUp.classList.remove('hidden')
        divPopUp.classList.add('popUp')
        document.body.classList.add('background')
        contadorClique = 0 // funcao reset
        contadorMovimento = 0
    }
}

//button sair 
function fecharPoUp() {
    divPopUp.classList.add('hidden')
    divPopUp.classList.remove('popUp')
    document.body.classList.remove('background')
}

botaoSair.addEventListener('click', fecharPoUp)

const resetar = document.getElementById("reset")
resetar.addEventListener('click', queroResetar)

function queroResetar() {
    contadorMovimento = 0
    displayContadorMov.innerHTML = 'Contador de Movimento: 0'
    torre1.appendChild(disco5)
    torre1.appendChild(disco4)
    torre1.appendChild(disco3)

    let botaoAtualID = botaoAtual.getAttribute('id')

    if (botaoAtualID === 'normal') {
        torre1.appendChild(disco2)
    } else if (botaoAtualID === 'hard') {
        torre1.appendChild(disco2)
        torre1.appendChild(disco1)
    }

}
