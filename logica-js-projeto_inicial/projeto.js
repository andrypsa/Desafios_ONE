alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 100) + 1;
console.log(numeroSecreto);
let chute;  // imprimir na tela
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt('Esolha um número entre 1 e 100');
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`); //quanto for concatenar um valor dentro de uma msg, coloca o crase
        }
        tentativas++;
    }
}
//operador ternário é uma forma concisa de escrever uma estrutura de decisão if-else em uma única linha de código. 
//Ele segue a seguinte sintaxe: `condição ? valorSeVerdadeiro : valorSeFalso`. 
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
// ? é a explicação de que o que está à esquerda é um if e a direta vai rodar se a expressão for verdadeira.
// : é a explicação de que o que está à esquerda é verdadeiro e à direita é falso.
//outra opção usando if e else é a seguir:

//let palavraTentativa;
//if (tentativas > 1) {
//    palavraTentativa = 'tentativas';
//} else {
//    palavraTentativa = 'tentativa';
//}

alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//if (tentativas > 1) {
//   alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com $(tentativas) tentativas`);
//} else {
//    alert('Isso aí! Você descobriu o número secreto ${numeroSecreto} com $(tentativas) tentativa');
//}