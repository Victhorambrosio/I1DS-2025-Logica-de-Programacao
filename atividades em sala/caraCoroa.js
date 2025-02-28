// /***********************************************************************
//     Lista de Exercícios – Lógica de Programação em JavaScript (Console)
//  ***********************************************************************

// 1. Par ou Ímpar?
// Escreva um programa que peça um número ao usuário e exiba no console se ele é par ou ímpar.

// 📌 Dica: Use o operador % para verificar o resto da divisão.
// ------------------------------------------------------------------------

// 2. Tabuada
// Peça ao usuário um número e exiba no console a tabuada desse número de 1 a 10.

// 📌 Exemplo (se o número for 3):
// 3 x 1 = 3
// 3 x 2 = 6
// ...
// 3 x 10 = 30
// ------------------------------------------------------------------------

// 3. Fatorial de um Número
// Solicite um número ao usuário e exiba no console o seu fatorial.

// 📌 Fatorial de 5: 5! = 5 × 4 × 3 × 2 × 1 = 120
// ------------------------------------------------------------------------

// 4. Soma dos Números de um Array
// Crie um programa que tenha um array com números aleatórios e exiba no console a soma total desses números.

// 📌 Exemplo:
// let numeros = [10, 20, 30, 40];
// // Saída: Soma = 100
// ------------------------------------------------------------------------

// 5. Ordenação de Números
// Peça ao usuário para inserir vários números separados por vírgula. Depois, exiba os números ordenados de forma crescente no console.

// 📌 Exemplo:
// Entrada: 8, 3, 5, 1, 9
// Saída: 1, 3, 5, 8, 9
// ------------------------------------------------------------------------

// */

// //01 atividade
// const imaparpar = (num) => {
//   return num % 2 == 0 ? "O número é par!" : "O número é ímpar!";
// };
// console.log(imaparpar(10));
// console.log(imaparpar(3));
// console.log(imaparpar(2));

// // 02 prof
// var tabuada = 6;
// console.log(tabuada, "x 1 =", tabuada * 1);
// console.log(tabuada, "x 2 =", tabuada * 2);
// console.log(tabuada, "x 3 =", tabuada * 3);
// console.log(tabuada, "x 4 =", tabuada * 4);
// console.log(tabuada, "x 5 =", tabuada * 5);
// console.log(tabuada, "x 6 =", tabuada * 6);
// console.log(tabuada, "x 7 =", tabuada * 7);
// console.log(tabuada, "x 8 =", tabuada * 8);
// console.log(tabuada, "x 9 =", tabuada * 9);
// console.log(tabuada, "x 10 =", tabuada * 10);

// //Atividade 3
// console.log("Fatorial de 5! =", 5 * 4 * 3 * 2 * 1);

// //Atividade 04
// let numbers = [10, 20, 30, 40];
// var soma = numbers[0] + numbers[1] + numbers[2] + numbers[3];
// console.log(soma);

// // atividade 5
// var numeros = [5, 3, 1, 6, 9];
// console.table(numeros);
// numeros.sort();
// console.table(numeros);

/*--------------------------------------------------------------------------------------------

/*Estourando o cartão - versão While - utilizando navegador
1. Crie uma variável e solicite ao usuário o seu nome; 
2. Crie uma variável e solicite ao usuário o seu banco; 
3. Crie uma variável e solicite ao usuário a sua agência; 
4. Crie uma variável e solicite ao usuário o número da conta; 
5. Crie uma variável e solicite ao usuário o saldo da conta; 
6. Exiba ao usuário os dados e o saldo da conta; 
7. Efetue e exiba ao usuário 5 movimentações na conta utilizando o laço While com valores aleatório; 
8. Exiba ao usuário novamente os dados e o saldo da conta;
*/

// var nome = prompt("Digite o nome:");

// var banco = prompt("Qual o banco?:");

// var agencia = prompt("Qual número da agencia:");

// var numeroConta = prompt("Qual número da conta?:");

// var saldo = prompt("Seu saldo é: R$");

// console.log(
//   `Nome: ${nome} | Seu banco é: ${banco} | Agencia: ${agencia} | Número da conta: ${numeroConta} | saldo disponível: R$ ${saldo}`
// );

// var contador = 1;
// while (contador <= 5) {
//   let gasto = Math.random() * 100; //Valor aleatório enre 0 e 99.999...
//   saldo -= gasto;
//   contador++;
// }
// console.log(saldo.toFixed(2));
// console.log(
//   `Nome: ${nome} | Seu banco é: ${banco} | Agencia: ${agencia} | Número da conta: ${numeroConta} | saldo disponível:  ${saldo.toFixed(2)}`
// );

//Jogo cara e coroa - melhor de três rodadas - aleatório - DO-WHILE

console.log("------------------------------------");
console.log("             PLACAR                 ");
console.log("------------------------------------");
console.log(`Vitórias: 'variavelVitoria`);
console.log(`Derrotas: 'variavelDerrotas`);
console.log("------------------------------------");

// var cara = 0;
// var coroa = 0;
// var contador = 1;
// do {
//   console.log("Cara ou Coroa");
//   contador++;
// } while (contador <= 3);
// var cara = Math.random() % 50 <= coroa;

var i = 1;
var cara = 0;
var coroa = 0;

do {
  let face = Math.random() * 100;
  face < 50 ? cara++ : coroa++;
  i++;
} while (i <= 3);

console.log("-----------------------------------------");
console.log("------------------SCORE------------------");
console.log("-----------------------------------------");
console.log(`Cara: ${cara}`);
console.log(`Coroa: ${coroa}`);
console.log("-----------------------------------------");

/*
Supondo que a população de um país A seja de a habitantes com uma taxa anual de crescimento de crescimento
 de 3% e que a população de um país B seja de b habitantes, com uma taxa anual de crescimento de 1,5%, fazer um algoritimo que
  calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas
   essas taxas de crescimento.
*/

var a = 800000;
var b = 950000;
var anos = 0;
var taxaA = 0.03;
var taxaB = 0.015;
while (a < b) {
  a += a * taxaA;
  b += b * taxaB;
  anos++;
}
console.log(
  `Ano ${anos} | População A: ${Math.round(a)} | População B: ${Math.round(b)} `
);
console.log(`Alcançará em: ${+anos} anos`);
