//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
alert('Olá');
let numero = prompt('Digite um número positivo ou negativo');

if (numero > 0) {
    alert("O número é positivo");
}
else if (numero < 0) {
    alert("O número é negativo");
}
else {
    alert("O número é zero");
}