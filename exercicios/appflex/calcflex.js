// app flex 
// @author Camila Yukari Jodai

let etanol, gasolina;
function calcular() {
    etanol = Number(frmFlex.txtEtanol.value.replace(",", "."));
    gasolina = Number(frmFlex.txtGasolina.value.replace(",", "."));
    // validação dos campos obrigatórios
    if (frmFlex.txtEtanol.value === "") {
        alert("Este campo precisa ser preenchido")
        frmFlex.txtEtanol.focus()
    } else if (frmFlex.txtGasolina.value === "") {
        alert("Este campo precisa ser preenchido")
        frmFlex.txtGasolina.focus()
    } else {
        if (etanol < 0.7 * gasolina) {
            document.getElementById('status').src = "./img/etanol.png"
        } else {
            document.getElementById('status').src = "./img/gasolina.png"
        }
    }
}

function limpar() {
    document.getElementById('status').src = "./img/flex.png"
}