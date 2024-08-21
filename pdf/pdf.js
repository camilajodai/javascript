/**
 * Exemplo de uso de biblioteca(pacote) jspdf
 * @Author Camila Yukari Jodai
 */

const { jsPDF } = require('jspdf')
// gerar um documento PDF
const pdf = new jsPDF()
pdf.text("Olá PDF!", 15, 15) //15, 15 (margem x y)
pdf.save('teste.pdf') // nome do arquivo salvo no local