const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
   const acha = numbers.find((number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      return true;      
    }
  });
  return acha;
}

console.log(findDivisibleBy3And5())

// ---------------------------------------------------------------------------- //

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  const find = names.find((nome) => {
    if (nome.length === 5) {
      return true;
    }
  });
  return find;
}

console.log(findNameWithFiveLetters());