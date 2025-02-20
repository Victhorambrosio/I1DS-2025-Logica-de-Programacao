//Exercícios Vetor matriz

//crie um vetor que receberá dados de um usuário

var dados = [];
console.log("Favor informar seu nome:");
dados.push("Victhor");

console.table(dados);

console.log("Informe seu cpf:");
dados.push("123.456.789-07");

console.table(dados);
//mostre ao usuário os dados e de um bom dia!
console.log("Bom dia", dados[0], "seu cpf é", dados[1]);
