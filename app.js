//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const amigos = [];

function adicionarAmigo(lista) {
  const campo = document.querySelector("#amigo");
  let addNome = document.getElementById("amigo").value;
  if (addNome != "") {
    amigos.push(addNome);
    let lista = document.getElementById("listaAmigos");
    let novoItem = document.createElement("li");
    novoItem.textContent = addNome;
    lista.appendChild(novoItem);
  } else {
    alert("Entrada invalida, escreva algo no campo!");
  }
  campo.value = "";
}

function sortearAmigo() {
  const listaLimpar = document.getElementById("listaAmigos");
  listaLimpar.innerHTML = "";
  if (amigos.length === 0) {
    alert("Adicione amigos antes de sortear!");
  }

  const nomeSorteado = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[nomeSorteado];

  let resultado = document.getElementById("resultado");
  resultado.textContent = `amigo sorteado é ${amigoSorteado}`;
}
