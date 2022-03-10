let array = ["java", "javascript", "python", "html", "css"];

for (let i = 0; i < array.length; i++) {
  let soma = 0;
  for (let z = 0; z < array.length; z++) {
    if (array[i].length < array[z].length) {
      soma += 1;
    }
    if (soma === array.length - 1) {
        console.log(array[i])
    }
  }
}