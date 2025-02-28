//--------------------------Objestos em JavaScript------------------------------
//Definindo uma classe em JavaScript (Pessoa)
//1-Classe (O molde dos objetos) - singular
// class Pessoa {
//   //Criamos uma classe chamada Pessoa (o molde)
//   constructor(nome, idade) {
//     //O constructor é como um formulário
//     this.nome = nome;
//     this.idade = idade;
//   }
// }
//2.Objeto: Criando um personagem/aluno
// var aluno1 = new Pessoa("Lucas", 22); //criamos um aluno Lucas com 22 anos
//aluno é um objeto baseado no molde Pessoa

//3.Métodos - Ações que um objeto pode fazer
// class Pessoa { //Criamos uma classe chamada Pessoa (o molde)
//   constructor(nome, idade) { //O constructor é como um formulário
//     this.nome = nome;
//     this.idade = idade;
//   }

//   apresentarSe() {
//     console.log(`Oi meu nome é ${this.nome}, e eu tenho ${this.idade} anos.`);
//   }

//   envelhecer() {
//     this.idade++;
//   }
// }

// var aluno1 = new Pessoa("Lucas", 22); //Criamos um aluno chamado Lucas
// aluno1.apresentarSe(); //Oi meu nome é Lucas, e eu tenho 22 anos.
// aluno1.envelhecer();
// aluno1.apresentarSe();

//Class: Molde para criar objetos, como uma ficha de aluno ou um molde de jogador de futebol.

//Objeto: Uma instancia real do modelo, Lucas ou Neymar.

//Atributo: Característica do objeto, como nome e idade.

//Métodos: Ações que o objeto pode fazer, como falar sua idade ou envelhecer.

//----------------------------------------------------------------------------//
//Crie uma class para jogador de futebol onde tenha nome, idade e posição
//o objeto criando com base no jogador de futebol poderá apresenta-se
//da seguinte forma: Olá, meu nome é "Neymar", tenho "33" anos e jogo na
//posição "Meia Atacante"
//Crie 3 objetos e faça com que eles se apresentem

class jogador {
  constructor(nome, idade, posicao) {
    this.nome = nome;
    this.idade = idade;
    this.posicao = posicao;
  }

  apresentarSe() {
    console.log(
      `Oi meu nome é ${this.nome}, e eu tenho ${this.idade} anos e sou ${this.posicao}.`
    );
  }
}

var jogador1 = new jogador("Neymar", 33, "Meia Atacante");
jogador1.apresentarSe();
var jogador2 = new jogador("Cristiano Ronaldo", 40, "Atacante");
jogador2.apresentarSe();
var jogador3 = new jogador("Luis Otávio", 16, "Goleiro");
jogador3.apresentarSe();

//---------------------------------------------------
//Criando classe Retângulo
class Retangulo {
  constructor(comprimento, largura) {
    this.comprimento = comprimento;
    this.largura = largura;
  }

  alterarComprimento(comprimento) {
    this.comprimento = comprimento;
  }

  alterarLargura(largura) {
    this.largura = largura;
  }

  obterArea() {
    return this.comprimento * this.largura;
  }
}

var ret = new Retangulo(10, 15);
console.table(ret);
// Apresentando valores (atributos) do objeto instancionado
console.log(`Comprimento: ${ret.comprimento}`);
console.log(`Largura: ${ret.largura}`);

// Apresentando a area
console.log(`Área: ${ret.obterArea}`);

// Alterando o comprimento do retangulo
ret.alterarComprimento(20);
console.table(ret);

// Alterando a largura do retangulo
ret.alterarLargura(30);
console.table(ret);

// Apresentando a area
console.log(`Área: ${ret.obterArea()}`);

/**********************************************************************
                        LISTA DE EXERCÍCIOS                          
**********************************************************************/
/*
Crie e utiliza uma classe "Sorvete" contendo as
propriedades: sabor, preco e tamanho (P / M / G)
*/
//Crie um sorvete de chocolate pequeno.
//Crie um sorvete de morango grande.
//Crie um sorvete de pistache médio.
//Altere o preco do sorvete de morango grande para R$ 10,51.
//Altere o tamanho do sorvete de pistache médio para grande.

// class Sorvete {
//     constructor(sabor, tamanho, preco) {
//       this.sabor = sabor;
//       this.tamanho = tamanho;
//       this.preco = preco;
//     }
// }

// var sorvete1 = new Sorvete("chocolate", "P" , 5.00);
// // sorvete1.apresentarSe();
// var sorvete2 = new Sorvete("pistache", M , "7.50");
// sorvete2.apresentarSe();
// var Sorvete3 = new Sorvete("morango", G, "10.00");
// Sorvete3.apresentarSe();

// // alterarPreco(preco) {
// //     this.preco = preco;
// //   }

// //   alterarTamanho(Tamanho) {
// //     this.Tamanho = Tamanho;
// //   }

// var ret = new Sorvete(10.51);
// console.table(ret);
// console.log(`preco: ${ret.preco}`);

// var ret = new Sorvete(G);
// console.table(ret);
// console.log(`tamanho: ${ret.tamanho}`);

// ret.alterarPreco(10.51);
// console.table(ret);

// ret.alterarTamanho(G);
// console.table(ret);

class Sorvete {
  constructor(sabor, tamanho, preco) {
    this.sabor = sabor;
    this.tamanho = tamanho;
    this.preco = preco;
  }
}

var sorvete1 = new Sorvete("Chocolate", "P", 3.5);
var sorvete2 = new Sorvete("Morango", "G", 3.5);
var sorvete3 = new Sorvete("Pistache", "P", 5.0);

console.log(
  `Sorvete escolhido: ${sorvete1.sabor} | ${sorvete1.tamanho} | Valor: R$${sorvete1.preco}`
);

sorvete2.preco = 10.51;
console.table(sorvete2);

sorvete3.tamanho = "G";
console.table(sorvete3);
