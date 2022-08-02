'use strict';
const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// document.querySelector('.message').textContent = '☑️ Correct number!';
// document.querySelector('.number').textContent = number;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score === 1) {
    document.querySelector('.message').textContent = 'GAME OVER';
    document.querySelector('.score').textContent = 0;
  } else if (!guess) {
    document.querySelector('.message').textContent = '🛑 No number Entered!';
  } else {
    if (number === guess) {
      document.querySelector('.message').textContent = '☑️ Correct number!';
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      if (guess > number) {
        document.querySelector('.message').textContent = 'Too high!';
      } else {
        if (guess < number) {
          document.querySelector('.message').textContent = 'Too low!';
        }
      }
    }
  }

  console.log(document.querySelector('.guess').value);
});
