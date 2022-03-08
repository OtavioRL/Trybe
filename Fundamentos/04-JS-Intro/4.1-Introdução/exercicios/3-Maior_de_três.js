const a = 1000;
const b = 900;
const c = 1100;

if (a > b && a > c) {
    console.log(a,"é o maior número")
}
else if (b > a && b > c) {
    console.log(b,"é o maior número")
}
else if (c > a && c > b) {
    console.log(c,"é o maior número")
}
else {
    console.log("Todos os números são iguais")
}