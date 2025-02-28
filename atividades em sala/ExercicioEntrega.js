// 1. Declare três variáveis numéricas e exiba no console a soma, subtração,
// multiplicação e divisão entre elas.

var x = 10;
var y = 5;
var z = 7;
console.log("x =", x, "y =", y, "z =", z);

var soma = x + y + z;
console.log("A soma de x + y + z é:", soma);
var subtração = x - y - z;
console.log("A subtração de x - y - z é:", subtração);
var divisão = x / y / z;
console.log("A divisão de x / y / z é", divisão);
var multiplica = x * y * z;
console.log("A multiplicação de x * y * z é:", multiplica);

console.log("-------------------------------------------");

// 2. Crie três variáveis representando as notas de um aluno e calcule sua
// média. Se a média for maior ou igual a 7, exiba "Aprovado", senão,
// "Reprovado".

var nota1 = 8;
var nota2 = 9;
var nota3 = 6;

var soma = nota1 + nota2 + nota3;
console.log("A soma das notas é:", soma);
var divisão = soma / 3;
console.log("A média desse aluno é de:", divisão);
var media = 7.6;
var resultado = media <= 7 ? "Reprovado" : "Aprovado";
console.log(resultado);

console.log("-------------------------------------------");

// 3. Dado um salário bruto de R$3.000,00, calcule o salário líquido
// considerando um desconto2 de 8% de INSS e 5% de imposto de renda.

var salarioBruto = 3000;

var desconto1 = 0.08;
desconto1 = salarioBruto * desconto1;
var total = salarioBruto - desconto1;
console.log("Salario Bruto: R$", salarioBruto, " - desconto1 = ", desconto1);

// var total = resultado;

var desconto2 = 0.05;
desconto2 = salarioBruto * desconto2;
total -= desconto2;
console.log("Salario Bruto: R$", salarioBruto, " - desconto2 = ", desconto2);
// var soma = desconto1 + desconto2;
// var subtração = 3000 - 390;
console.log("Salario líquido:", total);

console.log("-------------------------------------------");

// 4. Considere um círculo com raio de 7cm. Calcule e exiba a circunferência e a
// área do círculo (use Math.PI).

var raio = 7;
console.log(
  "Comprimento da circunfêrencia de raio = ",
  raio,
  "cm :",
  (2 * Math.PI * raio).toFixed(2)
);
console.log("Área do círculo é:", (Math.PI * 7 ** 2).toFixed(2));

console.log("-------------------------------------------");

// 5. Uma loja de eletrônicos vende celulares a R$1.500,00 cada e oferece
// desconto progressivo:
// o 5% para compras de 2 unidades;
// o 10% para compras de 3 unidades;
// o 15% para compras de 4 ou mais unidades. Exiba o valor final a pagar
// para cada quantidade.

var preco = 1500;

var desconto01 = 0.05;
desconto01 = preco * desconto01;
preco -= desconto01;
console.log("Preço: R$", preco, " - desconto01 = ", desconto01);

var desconto02 = 0.1;
desconto02 = preco * desconto02;
preco -= desconto02;
console.log("Preço: R$", preco, " - desconto02 = ", desconto02);

var desconto03 = 0.15;
desconto03 = preco * desconto03;
preco -= desconto03;
console.log("Preço: R$", preco, " - desconto03 = ", desconto03);

console.log("-------------------------------------------");

// 6. Dado um número qualquer, exiba se ele é múltiplo de 3, múltiplo de 5 ou
// múltiplo de ambos.

var num = 90;
console.log(`numero:${num}`);
if (num % 3 == 0 && num % 5 == 0) {
  console.log(`Multiplo de ambos`);
} else if (num % 3 == 0) {
  console.log(`Multiplo de 3`);
} else if (num % 5 == 0) {
  console.log(`Multiplo de 5`);
}

console.log("-------------------------------------------");

// 7. Determine se um ano específico (exemplo: 2024) é bissexto (divisível por 4
// e ou por 100.

// var ano = 1900;
// console.log(`ano:${ano}`);
// if (ano / 4 == 0) {
//   console.log(`Bissexto`);
// } else if (ano / 100 == 1) {
//   console.log(`Não Bissexto`);
// } else if (ano / 400 == 0) {
//   console.log(`Bissexto`);
// }

const verificarAnoBissexto = (ano) => {
  if (ano % 400 === 0) {
    return console.log(`${ano} é bissexto poque é divisível por 400.`);
  }
  if (ano % 100 === 0) {
    return console.log(
      `${ano} não é bissexto poque é divisível por 100, mas não por 400.`
    );
  }
  if (ano % 4 === 0) {
    return console.log(
      `${ano} é bissexto poque é divisível por 4, mas não por 100.`
    );
  }

  return console.log(`${ano} não é bissexto porque não é divisível por 4.`);
};

verificarAnoBissexto(2024);
verificarAnoBissexto(1900);
verificarAnoBissexto(1984);
verificarAnoBissexto(2869);

console.log("-------------------------------------------");

// 8. Dado um número de 0 a 6, exiba o dia da semana correspondente (0 =
// Domingo, 1 = Segunda...).

var dia = 0;
switch (dia) {
  case 0:
    console.log("Domingo");
    break;

  case 1:
    console.log("Segunda-feira");
    break;

  case 2:
    console.log("Terça-feira");
    break;

  case 3:
    console.log("Quarta-feira");
    break;

  case 4:
    console.log("Quinta-feira");
    break;

  case 5:
    console.log("Sexta-feira");
    break;

  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("dia invalido!");
    break;
}

console.log("-------------------------------------------");

// 9. Se um motorista ultrapassar um limite de velocidade de 80km/h, ele será
// multado. Para cada km acima do limite, a multa custa R$5,00. Determine o
// valor da multa para um carro a 95km/h.

var limite = 80;
var motorista = 95;
console.log(
  `Limite:${limite} km. | Velocidade do motorista:${motorista}. | Multa:${
    (motorista - limite) * 5
  }`
);

console.log("-------------------------------------------");

// 10. Crie um programa que, dado o preço de um produto, aplique um desconto
// conforme a seguinte tabela:
// o Menos de R$50,00: sem desconto.
// o Entre R$50,00 e R$100,00: 5% de desconto.
// o Acima de R$100,00: 10% de desconto.

var produto = 100;
var desconto001 = 50;
var desconto002 = 100;
var semDesconto = 0;
if (produto >= 100) {
  console.log(`O produto vai ter desconto de ${produto * 0.1}`);
} else if (produto > desconto001 && produto < desconto002) {
  console.log(`O produto vai ter o desconto e ${produto * 0.05}`);
} else {
  console.log(`Não tem desconto pra você vacilão`);
}

console.log("-------------------------------------------");

// 11. Exiba todos os números pares entre 1 e 50.
for (let i = 0; i <= 50; i += 2) {
  console.log(i);
}

console.log("-------------------------------------------");

// 12. Exiba a tabuada do número 9 (de 9 × 1 até 9 × 10).

var tabuada = 9;
console.log(tabuada, "x 1 =", tabuada * 1);
console.log(tabuada, "x 2 =", tabuada * 2);
console.log(tabuada, "x 3 =", tabuada * 3);
console.log(tabuada, "x 4 =", tabuada * 4);
console.log(tabuada, "x 5 =", tabuada * 5);
console.log(tabuada, "x 6 =", tabuada * 6);
console.log(tabuada, "x 7 =", tabuada * 7);
console.log(tabuada, "x 8 =", tabuada * 8);
console.log(tabuada, "x 9 =", tabuada * 9);
console.log(tabuada, "x 10 =", tabuada * 10);

console.log("-------------------------------------------");

// 13. Some os números de 1 a 100 e exiba o resultado.

var soma = 0;
var i = 1;
while (i <= 100) {
  soma += i;
  i++;
}
console.log(soma);

console.log("-------------------------------------------");

// 14. Dado um array [3, 5, 7, 9, 11], exiba a soma de seus elementos.

var numeros = [3, 5, 7, 9, 11];
console.log(numeros.length);
var soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log(`Soma dos elementos:${soma}`);

console.log("-------------------------------------------");

// 15. Crie um contador regressivo que comece em 10 e exiba cada número até 0.

var i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}

console.log("-------------------------------------------");

// 16. Crie um array com os dias da semana e exiba a quarta-feira.
var semana = [
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sábado",
  "domingo",
];
console.table(semana);
console.table(semana[2]);
console.log("-------------------------------------------");

// 17. Crie um array com cinco frutas e remova a terceira fruta da lista.
var frutas = ["Banana", "Maça", "Pera", "Uva", "Morango"];
console.table(frutas);
var elementoExcluir = "Uva";
var posicao = frutas.indexOf(elementoExcluir);
frutas.splice(posicao, 1);
console.table(frutas);
console.log("-------------------------------------------");

// 18. Crie um array de números e exiba apenas os números maiores que 10.
var array = [9, 10, 4, 60, 70];
for (let i = 0; i < array.length; i++) {
  if (array[i] > 10) {
    console.log(array[i]);
  } else {
    console.log();
  }
}
console.log("-------------------------------------------");

// 19. Transforme a string "JavaScript é incrível!" em maiúsculas e exiba no
// console.
var texto1 = `JavaScript é incrível!`;
console.log(texto1);
var texto2 = `JAVASCRIPT É INCRÍVEL!`;
console.log(texto2);
console.log("-------------------------------------------");

// 20. Dada a string "A vida é bela e cheia de desafios", exiba quantas palavras
// existem nela.
var textolegal = `A vida é bela e cheia de desafios`;
console.log(`O texto ${textolegal} tem oito palavras`);
console.log("-------------------------------------------");

// 21. Dado um vetor [12, 45, 67, 89, 23], exiba o maior número presente nele.
var numeros = [12, 45, 67, 89, 23];
console.log(numeros[3]);
console.log("-------------------------------------------");
// 22. Inverta a string "Desenvolvimento" e exiba "otnemivolpsoD".
var dev = "Desenvolvimento";
var dev1 = dev.split("").reverse().join("");
console.log(dev1);
console.log("-------------------------------------------");

// 23. Conte quantas letras "a" existem na frase "Aprender JavaScript é
// maravilhoso!".

console.log("-------------------------------------------");

// 24. Substitua todas as vogais da string "Desenvolvimento Web" por "*".

console.log("-------------------------------------------");
// 25. Crie um vetor de 5 números e exiba a média deles.
var numeros = [1, 2, 3, 4, 5];
var soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
var media = soma / 5;
console.log(`Média: ${media}`);
