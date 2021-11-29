
//qual torre o jogador clicou pela última vez
let torreTag = 0
let torreId = 0

//contador de movimentos
let contadorMovimento = 0

//último disco selecionado da torre clicada
let ultimoDiscoClicado = 'azul'
let larguraUltimoDisco = 0

//conta
let contadorChildElem = 0

//pai das torres
let containerTorres = document.getElementById('container')



function torreClicada(e) {
    torreTag = e.currentTarget
    torreId = torreTag.getAttribute('id')
    ultimoDiscoClicado = torreTag.lastElementChild
    
    contadorChildElem = torreTag.childElementCount
    larguraUltimoDisco = ultimoDiscoClicado.clientWidth
    contadorMovimento++
}

let torreUm = document.getElementById('torre1')
let torreDois = document.getElementById('torre2')
let torreTres = document.getElementById('torre3')


torreUm.addEventListener('click',torreClicada)
torreDois.addEventListener('click',torreClicada)
torreTres.addEventListener('click', torreClicada)

function movimento() {

}




// torre.addEventListener('click', discoTrocandoDeTorre)