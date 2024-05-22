/**
 * Estrutura de dados
 * Array (vetor e matriz)
 * @author Camila Yukari Jodai
 */

let alunosEM1 = ["Vitor", "Tania", "Pedro", "Maria", "Viviane", "Sirlene"]

console.log(typeof alunosEM1)

//determinando o tamanho de um array
console.log(alunosEM1.length)

// exibindo os dados de um array (CRUD Create)
console.log(alunosEM1[1])
console.log(alunosEM1)
console.table(alunosEM1)

// adicionando dados a array (CRUD Read)
alunosEM1.push("Jorge")
console.table(alunosEM1)

// alterando um dado do array (CRUD Update)
alunosEM1[0] = "Victor"
console.table(alunosEM1)

// excluindo um dado do array (CRUD Delete)
alunosEM1.pop()
console.table(alunosEM1)
delete alunosEM1[3]
console.table(alunosEM1)

// percorrendo um array
let notas = [3, 8, 5, 9, 2]
console.log(notas)
console.table(notas)
// laço for
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}
// forEach
notas.forEach((n) => {
    console.log(n)
})

// map()
// exemplo 1: adicionar 1 ponto as notas
let notasAtualizadas = notas.map((na) => {
    return na + 1
})
console.log(notas)
console.log(notasAtualizadas)

// exemplo 2: conversão do sistema de pontos para letras
// NA não atendeu (nota < 5)
// PA parcialmente atendido (nota > 5 < 7)
// A atendeu (nota > 7)
let notasConvertidas = notas.map((nc) => {
    if (nc < 5) {
        return ("NA")
    } else if (nc > 7) {
        return ("A")
    } else {
        return ("PA")
    }
})
console.log(notas)
console.log(notasConvertidas)

console.clear()
let alunosEM2 = new Array("Tony", "Peter", "Thor", "Natasha")
console.log(alunosEM2)
console.table(alunosEM2)

// estrutura de dados
let alunosEM3 = [
    {
        nome: "Bruce",
        idade: 43,
        bolsista: false
    },
    {
        nome: "Clark",
        idade: 45,
        bolsista: false
    },
    {
        nome: "Diana",
        idade: 36,
        bolsista: false
    },
    {
        nome: "Barry",
        idade: 23,
        bolsista: true
    }
]
console.log(alunosEM3)
console.table(alunosEM3)

// filtros
// ordenar A - Z
alunosEM3.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
})
console.table(alunosEM3)

// ordenar por idade
alunosEM3.sort((x, y) => {
    return(x.idade - y.idade)
})
console.table(alunosEM3)

// criando uma CÓPIA PARA EXIBIÇÃO
let alunosOrdenados = [...alunosEM3]
alunosOrdenados.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
})
console.table(alunosOrdenados)

// buscas personalizadas em um array
// EXEMPLO 1 - ALUNOS BOLSISTAS
console.log(alunosEM3.filter((b) => {
    return b.bolsista === true
}))

// EXEMPLO 2 - ALUNOS COM IDADE > 40
console.log(alunosEM3.filter((i) => {
    return i.idade > 40
}))

