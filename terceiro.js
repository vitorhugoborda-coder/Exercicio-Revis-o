// Esta função é chamada quando o botão no HTML é clicado
function alterarSubtitulo() {
    // 1. Abre uma caixa de diálogo (prompt) solicitando um novo texto
    var resposta = prompt("Qual será o novo conteúdo do subtítulo?");

    // 2. Verifica se o usuário preencheu algo ou se clicou em 'Cancelar'
    if (resposta !== null && resposta.trim() !== "") {
        
        // 3. Localiza o elemento <h2> pelo ID "subtitulo" que está no seu HTML
        var elementoSubtitulo = document.getElementById("subtitulo");

        // 4. Altera o texto do elemento para o que foi digitado
        elementoSubtitulo.innerText = resposta;

    } else if (resposta !== null) {
        // Caso o usuário dê OK sem digitar nada
        alert("Você não digitou nenhum texto!");
    }
}
