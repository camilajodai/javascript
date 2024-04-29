// JS - simulador de operadores lógicos
// @author Camila Yukari Jodai

// 1 aceder lampada
// 2 apagar lampada
// 3 quebrar lampada

let valor // valor recebido
let quebrada = false // estado da lÂmpada

function simular(valor){
    // quebrar a lampada
    if (valor === 3) {
        let beep = new Audio()
        beep.src = "./sound/glassbreaking.wav"
        beep.play()
        document.getElementById("lamp").src="./img/broken.jpg"
        quebrada=true
    }
}