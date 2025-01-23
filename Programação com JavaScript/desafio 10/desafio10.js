//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let numeroMax = prompt('Digite um número:');
let numeroInicial = 0;

while (numeroInicial <= numeroMax) {
    alert(`O número atual é: ${numeroInicial}`);
    console.log(`O número atual é: ${numeroInicial}`);
    numeroInicial ++;
}