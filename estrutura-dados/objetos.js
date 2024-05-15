/**
 * Estrutura de dados
 * Objetos
 * @author Camila Yukari Jodai
 */

const funcionario1 = {}
console.log(typeof funcionario1)
// adicionar dados a estrutura (CRUD Create)
funcionario1.nome = "João Vitor"
funcionario1.cargo = "Desempregado"
funcionario1.email = "andradejao@gmail.com"
funcionario1.salario = 5000000000000000
funcionario1.insta = "andradejao_"
// listar os dados da estrutura (CRUD Read)
console.log(funcionario1)
console.log(funcionario1.cargo)
// modificar os dados da estrutura (CRD Update)
funcionario1.nome = "João Vitor Andrade Miranda"
console.log(funcionario1)
// excluir dados da estrutura (CRUD Delete)
delete funcionario1.salario
console.log(funcionario1)

const funcionario2 = {
    nome: "Pedro",
    cargo: "Coletor de Algodão",
    email: "pedromillove@gmail.com",
    salario: 0
}

console.log(funcionario2)

const endereco1 = {
    logradouro: "Bat Caverna",
    cidade: "Gothan",
    estado: "Nova Jersey"
}

console.log(endereco1)

const funcionario3 = {
    nome: "Joab",
    cargo: "Jogador profissional",
    email: "motovea7@gmail.com",
    salario: 500000,
    ...endereco1 //spread operator (união de 2 estruturas)
}

console.log(funcionario3)

const funcionario4 = {
    nome: "Camila",
    cargo: "Esposa Trofeu",
    email: "camilalinda@gmail.com",
    salario: 120000000,
    ...endereco1 //spread operator (união de 2 estruturas)
}

console.log(funcionario4)

const funcionario5 = {
    nome: "Tony Stark",
    cargo: "Engenheira",
    email: "ironman@gmail.com",
    salario: 375000,
    armadura: {
        versao: "mark II",
        ano: 2010,
        reator: "Arc 01"
    },
    suitUp: () => {
        console.log("👻😻👽👄👌🏼")
    }
}

console.log(funcionario5)
console.log(funcionario5.armadura.versao)
funcionario5.suitUp() //executar a função interna da estrutura