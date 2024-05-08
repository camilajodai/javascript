document.getElementById('converter').addEventListener('click',
function() {
    const mb = document.getElementById('mb').value;
    const gb = mb / 1024;

    document.getElementById('photo').src = "gb.png"
    document.getElementById('result').innerText = `Resultado: ${gb.toFixed(1)} GB`;
});