var numeros = [1, 2, 3, 4, 5];
console.table(numeros);

console.table(numeros[2]);

var copia = numeros.slice();
console.log("Copiando um vetor!");
console.table(copia);

copia[0] = numeros[0] * 2;
copia[1] = numeros[1] * 2;
copia[2] = numeros[2] * 2;
copia[3] = numeros[3] * 2;
copia[4] = numeros[4] * 2;
console.table(copia);

var matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.table(matriz);

console.log("Matriz[0,0] =", matriz[0][0]);
console.log("Matriz[1,0] =", matriz[1][0]);
console.log("Matriz[2,0] =", matriz[2][0]);
