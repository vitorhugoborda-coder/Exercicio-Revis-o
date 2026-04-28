function alterarSubtitulo() {
    var resposta = prompt("Qual será o novo conteúdo do subtítulo?");
    if (resposta !== null && resposta.trim() !== "") {
        
        var elementoSubtitulo = document.getElementById("subtitulo");
        elementoSubtitulo.innerText = resposta;

    } else if (resposta !== null) {
   
        alert("Você não digitou nenhum texto!");
    }
}
