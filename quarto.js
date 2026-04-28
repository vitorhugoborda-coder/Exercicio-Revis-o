function somar() {
    // Busca os valores dos campos de input
    var num1 = document.getElementById('n1').value;
    var num2 = document.getElementById('n2').value;

    // Converte os textos para números e soma
    var resultado = Number(num1) + Number(num2);

    // Escreve o resultado no elemento 'res'
    document.getElementById('res').innerText = resultado;
}