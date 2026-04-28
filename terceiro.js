function alterarSubtitulo() {
    let novoTexto = prompt("Digite um novo texto para o subtítulo:");

    let subtitulo = document.getElementById("subtitulo");

    if (novoTexto !== null && novoTexto !== "") {
        subtitulo.innerText = novoTexto;
    }
}

