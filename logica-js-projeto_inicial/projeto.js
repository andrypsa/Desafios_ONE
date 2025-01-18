alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute  // imprimir na tela

while ()
//se for igual ao número secreto
if (numeroSecreto == chute) {
    console.log('Isso aí! Você descobriu o número secreto ${numeroSecreto}');
} else {
    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O numero secreto é maior que ${chute}`); //quanto for concatenar um valor dentro de uma msg, coloca o crase
    }
}