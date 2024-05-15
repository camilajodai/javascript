let total, desc, din, calc
 
function calcular() {
    total = Number(frmPdv.txtTotal.value)
    desc = Number(frmPdv.txtPorcentagem.value)
 
    calc = (total * desc) / 100
 
    frmPdv.txtDesconto.value = calc.toFixed(2)
 
    calc = total - calc
 
    frmPdv.txtTotalDesconto.value = calc.toFixed(2)
}
 
function troco() {
    din = Number(frmPdv.txtValorPago.value)
   
    calc = din - calc
 
    frmPdv.txtTroco.value = calc.toFixed(2)
}