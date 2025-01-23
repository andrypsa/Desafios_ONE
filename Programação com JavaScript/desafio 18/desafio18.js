//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. 
// Use if-else para imprimir a respectiva mensagem.
let numero = prompt('Digite um número:');
if (numero < 0) {
    console.log("O número digitado é negativo");
    alert("O número digitado é negativo");
} else if (numero == 0) {
    console.log("O número digitado é zero");
    alert("O número digitado é zero");
} else {
    console.log('O número digitado é positivo');
    alert('O número digitado é positivo');
}