/**
 * Assincronismo
 * fetch (promise simplificada)
 * @author Camila Yukari Jodai
 */

const read = require('readline-sync')
console.clear()
console.log("VIA CEP")
let cep = read.question("Digite o CEP: ")
let urlAPI = `https://viacep.com.br/ws/${cep}/json/`
// apoio ao entendimento da logica
// console.log(urlAPI)
// uso de promisse para recuperar os dados do webservices (API)
fetch(urlAPI)
    .then((response) => { //obter os dados
        return response.json()
    })
    .then((dados) => { //manipular os dados obtidos
        console.log(dados.logradouro)
        console.log(dados.bairro)
        console.log(dados.localidade)
        console.log(dados.uf)
    })
    .catch((error) => {
        console.log(`Erro ao obter o endereço: ${error}`)
    })