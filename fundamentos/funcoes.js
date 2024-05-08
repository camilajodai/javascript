/**
 * Estudo das funções usando a sintaxe morderna da linguagem
 * @author Camila Yukar Jodai
 * @link 
 */

console.clear();

// função simples
function hello() {
    console.log("Hello Function");
}

hello();

console.log(typeof hello);

// função anonima
const hello2 = function(){
    console.log("Hello function assigned");
}
hello2();
console.log(typeof hello2);

// função anonima simplificada (Arrow Function)
const hello3 = () => {
    console.log("Hello arrow function assigned");
}
hello3();
console.log(typeof hello3);

// função anonima super simplificada (Arrow Function)
const hello4 = _=> console.log("Hello arrow function assigned simflified");
hello4();
console.log(typeof hello4);

// funções com retorno
function somarS(num1, num2) {
    return console.log (num1+num2);
}
somarS(2, 3);
console.log(typeof somarS);

// funções anonima com retorno
let somarA = function (num1, num2) {
    return console.log (num1+num2);
}
somarA(2, 3);
console.log(typeof somarA);

// funções anonima simplificada com retorno
let somarAF = (num1, num2) => {
    return console.log (num1+num2);
}
somarAF(2, 3);
console.log(typeof somarAF);

// funções anonima super simplificada arror com retorno
let somarAFS = (num1, num2) => console.log (num1+num2);

somarAFS(2, 3);
console.log(typeof somarAFS);