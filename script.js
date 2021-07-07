'use strict';

// This function expressing is what exactly is is being passed as the second parameter
/*const x = function() {
  console.log(123);
}*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ Sem Número!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Número Correto!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '📈 Muito Alto!';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💥 Você Perdeu!';
        document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '📈 Muito Baixo!';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
      '💥 Você Perdeu!';
        document.querySelector('.score').textContent = 0;
    }
  }
});
