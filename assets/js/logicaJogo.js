const containerTorres = document.getElementById('container')

const displayContadorMov = document.createElement('section')
displayContadorMov.innerText = 'Contador de Movimento: '
containerTorres.appendChild(displayContadorMov)

let torreUm = document.getElementById('torre1')
let torreDois = document.getElementById('torre2')
let torreTres = document.getElementById('torre3')

let contadorClique = 0
let contadorMovimento = 0
let contadorChildElem = 0

let torre = 0

let torreOrigem = 0
let discoOrigem = 0
let larguraDiscoOrigem = 0


let torreDestino = 0
let discoDestino = 0
let larguraDiscoDestino = 0

function torreClicada (e) {
    torre = e.currentTarget
    contadorClique++
    console.log(contadorClique)
    torreOrigemouDestino()
}

torreUm.addEventListener ('click', torreClicada)
torreDois.addEventListener ('click', torreClicada)
torreTres.addEventListener ('click', torreClicada)

function torreOrigemouDestino() {
    if (contadorClique % 2 !== 0) {
        torreOrigem = torre
        discoOrigem = torreOrigem.lastElementChild
        larguraDiscoOrigem = discoOrigem.clientWidth
    } else {
        torreDestino = torre
        if (torreDestino.childElementCount !== 0) {
            discoDestino = torreDestino.lastElementChild
            larguraDiscoDestino = discoDestino.clientWidth
            console.log(larguraDiscoDestino*2)
        }
        moverDiscoDeDiv()
        checkWin()
    }
}

function moverDiscoDeDiv () {
    if (larguraDiscoOrigem < larguraDiscoDestino || torreDestino.childElementCount === 0) {
        torreDestino.appendChild(discoOrigem)
        contadorChildElem = torreDestino.childElementCount
        contadorMovimento++
        displayContadorMov.innerHTML= `Contador de Movimento: ${contadorMovimento}`
   }
}

function checkWin () {
    let discoIdTres = torreDestino.firstElementChild.getAttribute('id') //maior
    let discoIdUm = torreDestino.lastElementChild.getAttribute('id')
    if (contadorChildElem === 3 && discoIdTres === 'disco3' && discoIdUm === 'disco1' && torreDestino.getAttribute('id') !== 'torre1') {
        alert('Você venceu!!!')
        contadorClique = 0 // funcao reset
        contadorMovimento = 0
    }
}

// falta mover o último disco para a torre destino antes do alert de vitória
// pop up vitoria
// função reset - appendChild em todas as divs na torre um, e zerar contadores --- e criar botao reset + eventlistener


