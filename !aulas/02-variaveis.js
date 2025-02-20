// Criando variáveis com "var" (var nome_variavel = <valor>;)
var nome = "Tibúrcio";
console.log("Meu nome é", nome);
var idade = 23;
console.log("Meu nome é", nome, ", e eu tenho ", idade, "anos");
idade = idade + 1;
console.log("Meu nome é", nome, ", e agora eu tenho ", idade, "anos");
console.log("--------------------------------------------------------");

//JavaScript trabalha com sistema case sensitive (maiúscula são diferentes de minúculas)
console.log("Criando uma variavel Teste e tentando acessar como testE.");
let Teste = "Variavel teste!";
console.log(Teste);

//Regras para nomear identificadores(variaveis)
//Podem iniciar com 'A'-'Z', 'a'-'z', '-' ou '$'
let MinhaVariavel1 = 10;
let outraVariavel = 2.65;
const _minhaConstante = "Uma constante qualquer!";
var $minhaVariavel = -5;

//Variáveis lógicas (boolean)
var nome = "Bolsonaro";
var bobao = false;
var eGostoso = true;
console.log("Nome:", nome, "| É bonito ?", eGostoso, "|É bobo?", bobao);
