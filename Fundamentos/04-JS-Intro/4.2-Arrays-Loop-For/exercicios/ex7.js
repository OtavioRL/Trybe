let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let i = 0; i < numbers.length; i++) {
    let soma = 0;
    for(let z = 0; z < numbers.length; z++) {
        if (numbers[i] < numbers[z]) {
            soma += 1;
            if (soma == numbers.length -1) {
                console.log(numbers[i])
            }
        }
    }
}