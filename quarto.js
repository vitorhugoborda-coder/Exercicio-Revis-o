function somar() {
    var num1 = document.getElementById('n1').value;
    var num2 = document.getElementById('n2').value;

    var resultado = Number(num1) + Number(num2);

    document.getElementById('res').innerText = resultado;
}