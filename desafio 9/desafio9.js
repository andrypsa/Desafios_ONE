//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let contador = prompt('Digite um número:');

while (contador >= 0) {
    alert(`O número atual é: ${contador}`);
    console.log(`O número atual é: ${contador}`);
    contador--;
}