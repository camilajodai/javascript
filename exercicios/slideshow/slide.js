/** 
 * Simples Slide Show - Exemplo de Uso do Array
 * @author Camila Yukari Jodai
 */

let slides = ["slide1.jpg", "slide2.jpg", "slide3.jpg"]
let intervalo = 3000 //3000 milisegundos (3s)
// 3000 é um ajuste para 3 slides trocando a cada 1s
let indice = 0

show()

function show() {
    document.getElementById('slide').className += 'FadeOut'
    setTimeout(() => {
        document.getElementById('slide').src = (`img/${slides[indice]}`)
        document.getElementById('slide').className = ""
    }, 1000) //ajuste 1: trocar slide a cada 1s
    indice++
    if(indice === slides.length) {
        indice = 0
    }
    setTimeout(show, intervalo) // repetir o processo infinitamente
    // ajustar o intervalo de acordo com o número de slides e o tempo de troca entre eles.
    // EX. 5 slides a cada 1s (intervalo = 5000)
}