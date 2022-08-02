'use strict';
const number = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.message').textContent = '☑️ Correct number!';
// document.querySelector('.number').textContent = number;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '🛑 No number Entered!';
  } else {
    if (number === guess) {
      document.querySelector('.message').textContent = '☑️ Correct number!';
    } else {
      document.querySelector('.score').textContent--;
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
