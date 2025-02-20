function desconto(valor1, valor2) {
  return valor1 - valor2;
}
var anoAtual = 2025;
var anoNascimento = 2009;
var idade = desconto(anoAtual, anoNascimento);
console.log("---------------------------------");
console.log("Ano Atual: ", anoAtual);
console.log("Ano de Nascimento: ", anoNascimento);
console.log("Idade: ", idade);
console.log("---------------------------------");

function combustivel(litro) {
  return litro * 12;
}
console.log(
  "Eu abasteci meu carro com 24 litros, e agora consigo viajar",
  combustivel(24),
  "km!"
);
console.log("---------------------------------");
