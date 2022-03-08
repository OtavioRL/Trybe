const a = 45;
const b = 500;
const c = 90;


if (a > 360 || a <= 0) {
    console.log("Ângulo não é valido")
}
else if (b > 360 || b <= 0) {
    console.log("Ângulo não é valido")
}
else if (c > 360 || c <= 0) {
    console.log("Ângulo não é valido")
}
else if (a + b + c === 180) {
    console.log("É um triângulo")
}
else {
    console.log("Não é um triângulo")
}
