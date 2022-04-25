// jokescript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const fetchData = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  fetch(API_URL, fetchData)
    .then(response => response.json())
    .then((data) => {
      const piada = document.createElement('h3');
      piada.innerText = data.joke;
      document.body.appendChild(piada);
    });
};

window.onload = () => fetchJoke();