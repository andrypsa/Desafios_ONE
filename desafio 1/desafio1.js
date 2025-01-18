//Exibe alerta de boas vindas
alert('Boas vindas ao nosso site!');
//declara e atribui variáveis
let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponível = 1000;
//exibe alerta de erro
alert('Erro! Preencha todos os campos');
//declaração da variável com mensagem de erro
let mensagemDeErro = 'Erro! Preencha todos os campos';
//exibe o alerta com o valor da mensagemDeErro
alert(mensagemDeErro);
//usa o prompt para obter o nome do usuário
nome = prompt('Digite seu nome:');
//usa o prompt para obter a idade do usuário
idade = prompt('Digite sua idade:');
//comparação e exibição de mensagem
if (idade >= 18) {
    console.log("Pode tirar a habilitação!")
}