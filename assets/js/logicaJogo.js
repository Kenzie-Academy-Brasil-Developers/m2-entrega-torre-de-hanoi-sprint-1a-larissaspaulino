const containerTorres = document.getElementById('container')
const divPopUp = document.getElementById('popUpVitoria')
const botaoSair = document.getElementById('botaoSair')
const topo = document.getElementById('topo')
const torreUm = document.getElementById('torre1')
const torreDois = document.getElementById('torre2')
const torreTres = document.getElementById('torre3')

const displayContadorMov = document.createElement('aside')
displayContadorMov.innerText = 'Contador de Movimento: 0'
topo.appendChild(displayContadorMov)

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
        divPopUp.classList.remove('hidden')
        divPopUp.classList.add('popUp')
        contadorClique = 0 // funcao reset
        contadorMovimento = 0
    }
}

//button sair 
function fecharPoUp() {
    divPopUp.classList.add('hidden')
    divPopUp.classList.remove('popUp')
}

botaoSair.addEventListener('click', fecharPoUp)

const resetar = document.getElementById("reset")
resetar.addEventListener('click', queroResetar)

function queroResetar (){
    contadorMovimento = 0
    displayContadorMov.innerHTML = 'Contador de Movimento: 0'
    // torre1.appendChild(disco5) 
    // torre1.appendChild(disco4) 
    torre1.appendChild(disco3) 
    torre1.appendChild(disco2)
    torre1.appendChild(disco1)
}

