'use strict';

// This function expressing is what exactly is is being passed as the second parameter
/*const x = function() {
  console.log(123);
}*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highestScore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ Sem Número!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Número Correto!');

    document.querySelector('.number').textContent = secretNumber;
    
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highestScore) {
      highestScore = score;
      document.querySelector('.highestScore').textContent = highestScore
    }

    // When guess is to high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ?
        '📈 Muito Alto!' : '📉 Muito Baixo!');
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 Você Perdeu!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Comece adivinhar...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});