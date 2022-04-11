const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  const temOnome = arr.some((nome) => nome === name);
  return temOnome;  
}

console.log(hasName(names, 'Ana'))

// ------------------------------------------------------------------- //

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  //Adicione seu código aqui
  const temIdadeMinima = arr.every((pessoa) => pessoa.age >= 18);
  return temIdadeMinima;
}

console.log(verifyAges(people, 18));