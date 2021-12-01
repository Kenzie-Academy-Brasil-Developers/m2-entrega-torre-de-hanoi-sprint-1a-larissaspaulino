const containerTorres = document.getElementById('container')
const divPopUp = document.getElementById('popUpVitoria')
const botaoSair = document.getElementById('botaoSair')
const topo = document.getElementById('topo')


let contadorClique = true
let contadorMovimento = 0
let contadorChildElem = 0

let quantidadeDiscos = 0

let torre = 0
let torreOrigem = 0
let discoOrigem = 0
let larguraDiscoOrigem = 0
let torreDestino = 0
let discoDestino = 0
let larguraDiscoDestino = 0

function torreClicada(e) {
    let torre = e.target.closest('section')
    torreOrigemouDestino(torre)
}

containerTorres.addEventListener('click', torreClicada)

function torreOrigemouDestino(torre) {
    if (contadorClique) {
        torreOrigem = torre
        discoOrigem = torreOrigem.lastElementChild
        contadorClique = false
    } else {
        torreDestino = torre
        discoDestino = torreDestino.lastElementChild
        moverDiscoDeDiv()
        checkWin()
    }
}

function moverDiscoDeDiv() {
    if (discoDestino === null) {
        torreDestino.appendChild(discoOrigem)
        contadorChildElem = torreDestino.childElementCount
        contadorMovimento++
        displayContadorMov.innerHTML = `Contador de Movimento: ${contadorMovimento}`
        contadorClique = true
    } else if (discoOrigem.clientWidth < discoDestino.clientWidth) {
        torreDestino.appendChild(discoOrigem)
        contadorChildElem = torreDestino.childElementCount
        contadorMovimento++
        displayContadorMov.innerHTML = `Contador de Movimento: ${contadorMovimento}`
        contadorClique = true
    }
}

function checkWin() {
    let ultimoDisco = torreDestino.firstElementChild.getAttribute('id') 
    let primeiroDisco = torreDestino.lastElementChild.getAttribute('id')
    if (contadorChildElem === quantidadeDiscos && ultimoDisco === 'disco5' && primeiroDisco === discoMenorVitoria && torreDestino.getAttribute('id') !== 'torre1') {
        divPopUp.classList.remove('hidden')
        divPopUp.classList.add('popUp')
        document.body.classList.add('background')
        queroResetar()
    }
}

//button sair do popUp vitoria
function fecharPoUp() {
    divPopUp.classList.add('hidden')
    divPopUp.classList.remove('popUp')
    document.body.classList.remove('background')
}

botaoSair.addEventListener('click', fecharPoUp)

const resetar = document.getElementById("reset")
resetar.addEventListener('click', queroResetar)

function queroResetar() {
    contadorClique = true
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
