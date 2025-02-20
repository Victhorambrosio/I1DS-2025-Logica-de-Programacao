/***************************************************** 
                Exercícios para fixação 
*****************************************************/
/* 
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta;
*/
let nome = "Roberto";
let banco = "nubank";
let agencia = "4927";
let conta = "52637-9";
let saldo = 20000;
console.log( "nome:",nome,"\nnome do banco:", banco,
  "\nagencia:",
  agencia,
  "\nconta",
  conta,
  "\nsaldo da conta R$",
  saldo);

console.log("\nSeu saldo é de: R$",saldo,)
console.log("     + Depósito: R$ 700,00")
saldo=saldo+700;
console.log("     + Depósito: R$ 950,00")
saldo=saldo+950;
console.log("     - saque: R$ 85,00")
saldo=saldo-85;
console.log("     - saque: R$ 150,00")
saldo=saldo-150;
console.log("     + Depósito: R$ 550,00")
saldo=saldo+550;
console.log("\nsaldo da conta R$",  saldo);