
//qual torre o jogador clicou pela última vez
let torre = 0

//contador de movimentos
let contadorMovimento = 0
let discoSelecionado = torre.lastElementChild
let contador = 0

//pai das torres
let containerTorres = document.getElementById('container')

//função para avisar qual modo o jogador está
function qualTorre(e) {
    torre = e.target
    contadorMovimento++
    //e.stopPropagation()
}

main.addEventListener('click', qualTorre)

torre.addEventListener('click', discoTrocandoDeTorre)

