function helloWorld () {
    console.log('Hello World!');
}
helloWorld();


function ola (nome) {
    console.log(`Olá ${nome}!`);
}
ola('Pedro');


function dobroNumero (numero) {
    return numero * 2;
}
let numeroDobrado = dobroNumero(10);
console.log(numeroDobrado);


function calculaMedia (numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
}
let media = calculaMedia(3, 4, 7);
console.log(media);


function calculaMaior (numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
}
let maiorNumero = calculaMaior(5, 7);
console.log(maiorNumero);


function multiplicaNumero (numero) {
    return numero * numero;
}
let numeroMultiplicado = multiplicaNumero(5);
console.log(numeroMultiplicado);
