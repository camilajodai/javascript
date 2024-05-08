function calculateAverage() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);

    const average = (nota1 + nota2 + nota3 + nota4) / 4;
    let status;

    if (average < 4) {
        document.getElementById('photo').src = "./img/reproved.jpg"
        status = 'REPROVADO';
    } else if (average >= 4 && average < 7) {
        document.getElementById('photo').src = "./img/rec.jpg"
        status = 'RECUPERAÇÃO';
    } else {
        document.getElementById('photo').src = "./img/aprovved.jpg"
        status = 'APROVADO';
    }

    document.getElementById('result').innerText = `Média: ${average.toFixed(1)} - Status: ${status}`;
}

function limpar() {
    document.getElementById('photo').src = "./img/average.jpg"
}