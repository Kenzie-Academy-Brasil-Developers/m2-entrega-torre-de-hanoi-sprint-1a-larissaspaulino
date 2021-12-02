const arrTorres = ["torre1", "torre2", "torre3"]
const arrDisco = ["disco5", "disco4", "disco3", "disco2", "disco1"]
const dificuldades = ["easy", "normal", "hard"]

let contadorClique = true
let contadorMovimento = 0
let contadorChildElem = 0

const ulButtons = document.getElementById('ulButtons');

let botaoAtual = 0

const buttonResetar = document.createElement('button')
buttonResetar.id = "reset"
buttonResetar.innerText = "Resetar"

const footer = document.createElement('footer')
footer.appendChild(buttonResetar)
document.body.appendChild(footer)

const displayContadorMov = document.createElement('aside')
displayContadorMov.innerText = 'Contador de Movimento: 0'
topo.appendChild(displayContadorMov)


function criarTorres(torreID) {

    const torre = document.createElement('section')
    torre.id = torreID
    const hanoi = document.getElementById('container')

    hanoi.appendChild(torre)
}
arrTorres.forEach(criarTorres)

function criarDisco(discoID) {

    const disco = document.createElement('div')
    disco.id = discoID
    const torre = document.getElementById("torre1")
    torre.appendChild(disco)
}


function criarDificuldades(dificuldades) {

    const buttonsDificulty = document.createElement("button")
    buttonsDificulty.innerText = dificuldades
    buttonsDificulty.id = dificuldades

    const niveisCriados = document.getElementById("topo")

    ulButtons.appendChild(buttonsDificulty)
}

dificuldades.forEach(criarDificuldades)

function criarJogo(e) {
    botaoAtual = e.target
    let botaoId = botaoAtual.getAttribute('id')
    
    if (botaoAtual.tagName === 'BUTTON') {
        contadorMovimento = 0
        displayContadorMov.innerHTML = `Contador de Movimento: ${contadorMovimento}`
        
        
        const removerDiscos = document.getElementById("torre1")
        while (removerDiscos.firstChild) {
            removerDiscos.removeChild(removerDiscos.firstChild)
        }
        const removerDiscos2 = document.getElementById("torre2")
        while (removerDiscos2.firstChild) {
            removerDiscos2.removeChild(removerDiscos2.firstChild)
        }
        const removerDiscos3 = document.getElementById("torre3")
        while (removerDiscos3.firstChild) {
            removerDiscos3.removeChild(removerDiscos3.firstChild)
        }
        
        if (botaoId === 'easy') {
            for (let i = 0; i < 3; i++) {
                criarDisco(arrDisco[i])
            }
            quantidadeDiscos = 3
            discoMenorVitoria = "disco3"
        } else if (botaoId === 'normal') {
            for (let i = 0; i < 4; i++) {
                criarDisco(arrDisco[i])
            }
            // contadorMovimento = 0
            quantidadeDiscos = 4
            discoMenorVitoria = "disco2"
        } else {
            for (let i = 0; i < arrDisco.length; i++) {
                criarDisco(arrDisco[i])
            }
            // contadorMovimento = 0
            quantidadeDiscos = 5
            discoMenorVitoria = "disco1"
        }
    }

}

ulButtons.addEventListener('click', criarJogo)

