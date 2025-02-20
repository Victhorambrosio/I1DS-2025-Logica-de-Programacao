/*******************************************************
 *                   Lista de exercícios 03
 *******************************************************/
// 1. Crie um array de frutas com os seguintes elementos:
// Banana, Maçã, Pera, Uva, Morango.
// 2. Adicione Tangerina no final.
// 3. Adicione Goibada no início.
// 4. Exiba o conteúdo indíce 5.
// 5. Exclua o elemento uva.
// 6. Crie uma cópia do array apenas com os elementos com índices 2, 3 e 4.

var frutas = ["Banana", "Maça", "Pera", "Uva", "Morango"];
console.table(frutas);
frutas.push("Tangerina");
console.table(frutas);
frutas.unshift("Goiaba");
console.table(frutas);
console.table(frutas[5]);
var elementoExcluir = "Uva";
var posicao = frutas.indexOf(elementoExcluir);
frutas.splice(posicao, 1);
console.table(frutas);
var copia = frutas.slice(2, 5);
console.table(copia);
