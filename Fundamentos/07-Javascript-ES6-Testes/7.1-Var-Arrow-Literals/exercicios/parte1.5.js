const oddsAndEvens = [13, 3, 4, 10, 7, 2];


// Seu código aqui.

const retorna = (array) => {
  let result = [];
  
  for (let i = 0; i < array.length; i += 1) {
    let soma = 0;
    for (let z = 0; z < array.length; z += 1) {
      if (array[i] > array[z]) {
        soma += 1;
      }
      
    }
    result.splice(soma, 0, array[i]);   
    
  }
  console.log(result);
}
retorna(oddsAndEvens);

console.log(retorna); // será necessário alterar essa linha 😉