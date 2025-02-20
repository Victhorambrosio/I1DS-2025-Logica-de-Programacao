// var nome = "Chaolin";
// var idade = 21;
// var resultado = idade <= 18 ? "Não pode votar!" : "O voto é obrigatório!";
// console.log("Nome: ", nome, " | Idade: ", idade, " | Pode votar?", resultado);

// console.log("----------------------------------------------------")
// var nome = "Luis Otávio";
// var idade = 13;
// var resultado = idade <= 18 ? "Não pode votar!" : "O voto é obrigatório!";
// console.log("Nome: ", nome, " | Idade: ", idade, " | Pode votar?", resultado);
// console.log("----------------------------------------------------")
// var nome = "Lucas";
// var idade = 22;
// var resultado = idade <= 18 ? "Não pode votar!" : "O voto é obrigatório!";
// console.log("Nome: ", nome, " | Idade: ", idade, " | Pode votar?", resultado);

const podevotar = (idade) => {
    //isso é uma função
    if (idade < 16) {
      return "você não pode votar";
    } else if (idade >= 18 && idade < 70) {
      return "você pode votar";
    } else {
      return "seu voto é facultativo";
    }
  };
  var nome = ["ygona", "batata", "fernanda", "cristinne"];
  console.log("Ola", nome[0], "você tem 16 anos e", podevotar(16));
  console.log("Ola", nome[1], "você tem 22 anos e", podevotar(22));
  console.log("Ola", nome[2], "você tem 70 anos e", podevotar(70));
  console.log("Ola", nome[3], "você tem 17 anos e", podevotar(12));