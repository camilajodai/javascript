// regra de 3

const read = require('readline-sync')

let x,y,valor

console.clear();
console.log("Regra de 3")
console.log("x % de y = valor")

// entrada de dados
x = read.question("Digite o valor de X: ")
y = read.question("Digite o valor de Y: ")

// processamento
valor = (x * y) / 100

// saída
console.log(`${x}% de ${y} = ${valor.toFixed(2)}`)