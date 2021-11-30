const container = document.getElementById('container');
//Torres
const arrTorres = ["torre1", "torre2", "torre3"]

function criarTorres (torreID){

    const torre = document.createElement('section')

    torre.id = torreID

    const hanoi = document.getElementById('container')

    hanoi.appendChild(torre)
}
for(let i = 0; i < arrTorres.length; i++){
    criarTorres(arrTorres[i])
}
// Discos
const arrDisco = ["disco3", "disco2", "disco1"]

function criarDisco(id){

    const disco = document.createElement('div')
    disco.id = id

    const torre = document.getElementById("torre1")
   
    torre.appendChild(disco)
}

for(let i = 0; i < arrDisco.length; i++){
    criarDisco(arrDisco[i])
}

//Reset
const footer = document.createElement('footer')
document.body.appendChild(footer)

const buttonResetar = document.createElement('button')
buttonResetar.id = "reset"
buttonResetar.innerText = "Resetar"
footer.appendChild(buttonResetar)