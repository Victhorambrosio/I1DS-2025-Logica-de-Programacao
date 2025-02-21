/*********************************************************
 | | | | | | | | Lista de Exercícios 07| | | | | | | | | 
 *********************************************************/
/*
Dada a matriz abaixo, faça um programa em JavaScript que exiba ao usuário os elementos de sua diagonal principal com o laço FOR.

|  3  5  8  |
|  1  9  2  |
|  7  1  4  |
*/
var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];
for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    linha == coluna &&
      console.log(`Matriz[${linha}][${coluna}] = ${matriz[linha][coluna]}`);
  }
}

/*Dada a matriz abaixo, faça um programa em JavaScrpit que multiplique seus elementos por um valor x e exiba ao usuário a matriz antes e após a multiplicação.
|  3   5   8   |
|  1   9   2   |
|  7   1   4   |

*/
var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];

var x = 4;
console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    matriz[linha][coluna] *= x;
  }
}
console.table(matriz);


//Faça um loop FOR onde apresente os números ímpares de 0 a 100;
//Não pode ser resolvido com conta ou resto de divisão
for (let i = 0; i <= 100; i++) {
  console.log(i);
}