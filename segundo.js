let texto = "Olá, mundo"; 
let numeroInteiro = 10; 
let numeroDecimal = 3.14; 
let verdadeiro = true; 

function mostrarVariavel(nome, valor) {
    let mensagem = nome + ": " + valor + " | Tipo: " + typeof valor;
    alert(mensagem);
    console.log(mensagem);
}

mostrarVariavel("String", texto);
mostrarVariavel("Inteiro", numeroInteiro);
mostrarVariavel("Float", numeroDecimal);
mostrarVariavel("Booleano", verdadeiro);