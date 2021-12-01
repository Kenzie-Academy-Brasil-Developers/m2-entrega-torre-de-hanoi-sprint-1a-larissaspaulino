const arrTorres     = ["torre1", "torre2", "torre3"]
const arrDisco      = ["disco5","disco4","disco3", "disco2", "disco1"]
const dificuldades  = ["easy", "normal", "hard"]
const ulButtons     = document.getElementById('ulButtons');
const footer        = document.createElement('footer')
document.body.appendChild(footer)

const buttonResetar     = document.createElement('button')
buttonResetar.id        = "reset"
buttonResetar.innerText = "Resetar"
footer.appendChild(buttonResetar)

let botaoAtual = 0

function criarTorres (torreID){

    const torre     = document.createElement('section')
    torre.id        = torreID
    const hanoi     = document.getElementById('container')

    hanoi.appendChild(torre)
}
arrTorres.forEach(criarTorres)

function criarDisco(discoID){

    const disco     = document.createElement('div')
    disco.id        = discoID
    const torre     = document.getElementById("torre1")
   
    torre.appendChild(disco)
}
function criarDificuldades (dificuldades){

    const buttonsDificulty      = document.createElement("button")
    buttonsDificulty.innerText  = dificuldades
    buttonsDificulty.id         = dificuldades

    const niveisCriados         = document.getElementById("topo")

    ulButtons.appendChild(buttonsDificulty)
}
dificuldades.forEach(criarDificuldades)

function criarJogoFacil (event){
    
    const removerDiscos = document.getElementById("torre1")
    while(removerDiscos.firstChild){
        removerDiscos.removeChild(removerDiscos.firstChild)
    }
    for(let i = 0; i < 3; i++){
        criarDisco(arrDisco[i])
    }

    quantidadeDiscos    = 3
    discoMenorVitoria   = "disco3"
}
function criarJogoMedio (event){
    botaoAtual = event.target
    const removerDiscos = document.getElementById("torre1")
    while(removerDiscos.firstChild){
        removerDiscos.removeChild(removerDiscos.firstChild)
    }
    for(let i = 0; i < 4; i++){
        criarDisco(arrDisco[i])
    }
    quantidadeDiscos    = 4
    discoMenorVitoria   = "disco2"
}
function criarJogoDificil (event){
    botaoAtual = event.target
    const removerDiscos = document.getElementById("torre1")
    while(removerDiscos.firstChild){
        removerDiscos.removeChild(removerDiscos.firstChild)
    }
    for(let i = 0; i < arrDisco.length; i++){
        criarDisco(arrDisco[i])
    }
    quantidadeDiscos    = 5
    discoMenorVitoria   = "disco1"
}


const jogoFacil = document.getElementById('easy')
jogoFacil.addEventListener('click', criarJogoFacil)

const jogoMedio = document.getElementById('normal')
jogoMedio.addEventListener('click', criarJogoMedio)

const jogoDificil = document.getElementById('hard')
jogoDificil.addEventListener('click', criarJogoDificil)
