//const fetch = require('node-fetch');
const url = 'https://api.coincap.io/v2/assets';

function pegaDados() {
  
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      //console.log(data);
      data.data.forEach((coin) => {
        if(coin.rank <= 10) {
          const novoElemento = document.createElement('h3');
          novoElemento.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd} USD`;
          document.body.appendChild(novoElemento);
        }
      });
    });

}


window.onload = pegaDados();