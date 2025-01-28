//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
function adicionarAmigo() {
  const campo = document.querySelector("#amigo");
  let addNome = document.getElementById("amigo").value;
  if (addNome != "") {
    let lista = document.getElementById("listaAmigos");
    let novoItem = document.createElement("li");
    novoItem.textContent = addNome;
    lista.appendChild(novoItem);
  } else {
    alert("Entrada invalida, escreva algo no campo!");
  }
  campo.value = "";
}
