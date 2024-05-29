/**
 * Assincronismo
 * @author Camila Yukari Jodai
 */

const read = require('readline-sync')

// simulação do banco de dados usando uma estrutura de dados
const database = {
    admin: {
        usuario: "Administrador",
        senha: "password"
    },
    prof: {
        usuario: "Camila Yukari Jodai",
        senha: "123456"
    }
}

// Autenticação de usuário
console.clear()
console.log("-----------------------")
console.log("USUÁRIO")
console.log("-----------------------")
// entrada de dados (captur do login e senha)
let login = read.question("Login: ")
let senha = read.question("Senha: ")
console.log("-----------------------")
// executando uma função assíncrona com uso de promise
logar(login,senha)
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log(`Erro na autenticação ${error}`)
    })

// função logar (autenticação de usuário)
function logar(login,senha) {
    // uso de promise para trabalhar a requisição ao banco de dados de forma assíncrona
    return new Promise((resolve,reject) => {
        // uso do setTimeout pra delay
        setTimeout(() => {
            // logica para autenticar um usuario
            // o primeiro IF verifica se existe o login
            if (database.hasOwnProperty(login)) {
                // o segundo IF verifica se a senha ta correta
                if (database[login].senha === senha) {
                    resolve(`Autenticação bem-sucedida. Olá ${database[login].usuario}`)
                } else {
                    reject("Senha incorreta. Tente novamente")
                }
            } else {
                reject("Usuário não encontrado. Por favor, verifique o login.")
            }
        }, 2000)
    })
}