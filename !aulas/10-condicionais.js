//Condicional simples com IF
var anoNascimento = 2003;

if (anoNascimento > 2003) {
  console.log("A pessoa nasceu depois de 2003.");
}

if (anoNascimento < 2003) {
  console.log("A pessoa nasceu antes de 2003.");
}

if (anoNascimento == 2003) {
  console.log("A pessoa nasceu em 2003.");
}

//Condições simples com If-else
var anoNascimento = 2005;
if (anoNascimento > 2000) {
  console.log("A pessoa nasceu depois de 2000.");
} else {
  console.log("A pessoa nasceu em 2000 ou antes.");
}

//Condições compostas com If
const login = "Chaolin Rolha de Poço";
const senha = "123456";

var loginUser = "Chaolin Rolha de Poço";
var senhaUser = "123456";

if (loginUser == login && senhaUser == senha) {
  console.log("Acesso Permitido!");
} else {
  console.log("Acesso Negado!");
}

//Desvio condicional aninhado - IF-ELESEIF-ELSE
var semaforo = "vemrelho";

if (semaforo == "verde") {
  console.log("siga");
} else if (semaforo == "amarelo") {
  console.log("Atenção!");
} else {
  console.log("Pare!\n");
}

//Desvio condicional IF com bloco de comandos
var idade = 18;

if (idade <= 18) {
  console.log("Entrei no If...");
  idade++;
  console.log("A nova idade é", idade);
  console.log("Agora estou saindo do bloco If");
}
console.log("Terminei");

//Criando variáveis locais com "let" (só existe dentro do bloco onde foram criadas)
var mes = "Agosto";
var dia = 15;

if (dia == 15 && mes == "Agosto") {
  let mensagem = "hoje é dia 15 de agosto";
  console.log(mensagem);
}
console.log("Tentando acessar a variável local fora do bloco, vai dar erro!");
//console.log(mensagem);

//Criando uma função com desvio condicional If
const desconto = (valorCompra) => {
  let desconto = 0;
  if (valorCompra >= 1000) {
    desconto = (valorCompra * 12) / 100;
  }

  return desconto;
};

var totalCompra = 950;
console.log(
  "Valor total da compra: R$",
  totalCompra,
  "::: Desconto: R$",
  desconto(totalCompra)
);

var totalCompra = 1800;
console.log(
  "Valor total da compra: R$",
  totalCompra,
  "::: Desconto: R$",
  desconto(totalCompra)
);

//Desvio condicional If inline (ternário)
// condição ? expressão_se_verdadeiro    : expressão_se_falso
var preco = 500;
var resultado = preco <= 100 ? "Tá barato!" : " Vish, ta muito caro!";
// o operador acima é o mesmo que escrever:
// if(preco<=100){
//     resultado = "Tá barato!"
// } else{
//     resultado = "Vish, ta muito caro!"
// }
console.log("Preço: R$", preco, "-", resultado);

//If ternário com somente uma expressão
//condição && expressão
var logado = true;
logado && console.log("Usuário está logado!");

//Desvio condicional - Switch Case
console.log(
  "---------------------------------Switch Case---------------------------------"
);
switch (1) {
  case 1:
    console.log("O usuário digitou o número 1!");
    break;

  default:
    console.log("O usuário informou um número diferente de 1!");
    break;
}
console.log("---------------------------------------------");
//Menu de  seleção
var menuSelecionado = "Contato";

switch (menuSelecionado) {
  case "Home":
    console.log("Você clicou no link 'Home'!");
    break;

  case "Quem somos":
    console.log("Você clicou no link 'Quem somos'");
    break;

  case "Contato":
    console.log("Você clicou no link 'Contato'!");
    break;

  default:
    console.log("Opção inválida no link 'Contato'");
    break;
}

//Varias opções com mesmo case - Switch Case
var mes = 12;

switch (mes) {
  case 1:
  case 2:
  case 3:
    console.log("Primeiro trimestre!");
    break;

  case 4:
  case 5:
  case 6:
    console.log("Segundo trimestre!");
    break;

  case 7:
  case 8:
  case 9:
    console.log("Terceiro trimestre!");
    break;

  case 10:
  case 11:
  case 12:
    console.log("Quarto trimestre!");
    break;

  default:
    console.log("Mês inválido!");
    break;
}
