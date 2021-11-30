let containerTorres = document.getElementById('container')

let torreUm = document.getElementById('torre1')
let torreDois = document.getElementById('torre2')
let torreTres = document.getElementById('torre3')

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
    contadorMovimento++
    torreOrigemouDestino()
}

torreUm.addEventListener ('click', torreClicada)
torreDois.addEventListener ('click', torreClicada)
torreTres.addEventListener ('click', torreClicada)

function torreOrigemouDestino() {
    if (contadorMovimento % 2 !== 0) {
        torreOrigem = torre
        discoOrigem = torreOrigem.lastElementChild
        larguraDiscoOrigem = discoOrigem.clientWidth
        console.log(larguraDiscoOrigem)
    } else {
        torreDestino = torre
        if (torreDestino.childElementCount !== 0)
        discoDestino = torreDestino.lastElementChild
        larguraDiscoDestino = discoDestino.clientWidth
       moverDiscoDeDiv()
       /* torreDestino.appendChild(discoOrigem)
       contadorChildElem = torreDestino.childElementCount */
    }
}

function moverDiscoDeDiv () {
   if (larguraDiscoOrigem < larguraDiscoDestino || torreDestino.childElementCount === 0) {
    torreDestino.appendChild(discoOrigem)
    contadorChildElem = torreDestino.childElementCount
   }
}

