const container = document.getElementById('container');
//Torres
const primeiraTorre = document.createElement('section');
primeiraTorre.id = "torre1";
container.appendChild(primeiraTorre);

const segundaTorre = document.createElement('section');
segundaTorre.id = "torre2";
container.appendChild(segundaTorre);

const terceiraTorre = document.createElement('section');
terceiraTorre.id = "torre3";
container.appendChild(terceiraTorre);

// Discos
const discoTres = document.createElement('div')
discoTres.id = "disco3"
primeiraTorre.appendChild(discoTres)

const discoDois = document.createElement('div')
discoDois.id = "disco2"
primeiraTorre.appendChild(discoDois)

const discoUm = document.createElement('div')
discoUm.id = "disco1"
primeiraTorre.appendChild(discoUm)



