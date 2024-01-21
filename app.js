alert("Bem vindo ao jogo do número secreto!");
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
  chute = prompt("Digite um número de 1 a 100.");
  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}.`);
    } else {
      alert(`O número secreto é maior que ${chute}.`);
    }
    tentativas++;
  }
}

let palavraTentaviva = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Parabéns, você acertou o número secreto ${numeroSecreto} depois de ${tentativas} ${palavraTentaviva}.`
);
