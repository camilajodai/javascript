// Tipagem dinÂmica 
// constantes e variáveis 

console.clear();
console.log("STRINGS______________")
let nome = "Camila Yukari Jodai"
console.log(nome)
console.log(typeof(nome))
nome = "ca"
console.log(nome)
console.log(nome.replace("ca","mila"))
// concatenação
console.log("Professor: "+nome)
console.log(`professor: ${nome}`)

console.log("NUMBERS______________")
let peso = 45;
let altura = 1.51
console.log(typeof(peso))
console.log(typeof(altura))
console.log(Number.isInteger (peso))
console.log(Number.isInteger (altura))
let imc = peso/(altura*altura)
console.log(`IMC: ${imc.toFixed(2)}`)

console.log("BOOLEANS______________")
let sw = true;
console.log(typeof(sw))
console.log(`Chave: ${sw}`)

// ATENÇÃO
console.log(10/0)
console.log("3" + 2) //concatena
console.log("3" - 2) //faz a conta
console.log("3" * 2)
console.log("3" / 2)
console.log("3x" - 2) //NaN
console.log(0.5 + 0.5)
console.log(0.1 + 0.2)
