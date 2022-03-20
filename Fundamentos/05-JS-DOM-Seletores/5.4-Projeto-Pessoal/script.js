const lista = document.getElementById("lista");
const inputNome = document.getElementById("inputNome");
const inputIdade = document.getElementById("inputIdade");
const button = document.getElementById("botao");
let n = 0;
function guardaDados(n) {
  let nomeInput = inputNome.value;
  let idadeInput = inputIdade.value;
  localStorage.setItem("Nome" + JSON.stringify(n), nomeInput);
  localStorage.setItem("Idade" + JSON.stringify(n), idadeInput);
}

function criaElementos(n) {
  let nome = localStorage.getItem("Nome" + JSON.stringify(n));
  let idade = localStorage.getItem("Idade" + JSON.stringify(n));
  let novali = document.createElement("li");
  novali.innerText = nome + " - " + idade;
  lista.appendChild(novali);
}

function limpaInput() {
  inputNome.value = "";
  inputIdade.value = "";
}

function fazTudo() {
  guardaDados(n);
  criaElementos(n);
  limpaInput();
  n += 1;
}
function recarrega() {
  for (let i = 0; i <= 10; i += 1) {
    if(localStorage.getItem("Nome" + JSON.stringify(i)) !== null) {
      criaElementos(i);
    }  
}
}

window.onload = recarrega();
  

button.addEventListener("click", fazTudo);
