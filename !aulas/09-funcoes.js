function somar2Mais2() {
  return 2 + 2;
}
console.log(somar2Mais2());

//Criando uma função que soma dois valores e retorna o resultado
function somar(val1, val2) {
  return val1 + val2;
}
console.log("5 + 3 =", somar(5, 3));
console.log("12 + 8 =", somar(12, 8));
console.log("6,5 + 2,12 =", somar(6.5, 2.12));

var v1 = 9;
var v2 = 6;
console.log("v1 + v2 =", somar(v1, v2));

//Criando uma função que escreve "bom dia!"
function bomDia(nome) {
  console.log("Olá,", nome, " muito bom dia para você!");
}

bomDia("Robson");

//Criando um função que calcula e retorna o desconto em uma venda
function desconto(valor) {
  return valor * 0.05;
}
//console.log("O desconto do produto no valor de R$100,00 é R$", desconto(100));
var totalPedido = 300;
var totalDesconto = desconto(totalPedido);
var valorFinal = totalPedido - totalDesconto;

console.log("---------------------------------");
console.log("Total do Pedido: R$", totalPedido);
console.log("Total dos Descontos: R$", totalDesconto);
console.log("Valor líquido: R$", valorFinal);
console.log("---------------------------------");

//Criando uma função que apresenta pessoas!
const apresentaPessoas = (nomePessoa, idade, cidade) => {
  //Apresenta a vocês: Nome Pessoa, que tem "XX" anos e mora em "Cidade"
  return console.log(
    "Apresento a vocês:",nomePessoa,"que tem",idade,"anos e mora em",cidade);
};

apresentaPessoas("Zuleika", 19,"Brotas")
apresentaPessoas("Pafúncio", 21,"Jaú")
apresentaPessoas("Epamínondas", 16,"Barra Bonita")
