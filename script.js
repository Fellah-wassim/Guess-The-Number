'use strict';
const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// document.querySelector('.message').textContent = '☑️ Correct number!';
// document.querySelector('.number').textContent = number;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when the game is over
  if (score === 1) {
    document.querySelector('.message').textContent = 'GAME OVER';
    document.querySelector('.score').textContent = 0;
    //when player doesn't enter any number
  } else if (!guess) {
    document.querySelector('.message').textContent = '🛑 No number Entered!';
  } else {
    //when the player enter the right number
    if (number === guess) {
      document.querySelector('.message').textContent = '☑️ Correct number!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '20rem';
      document.querySelector('.number').textContent = number;
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      //when the player guess hight number
      if (guess > number) {
        document.querySelector('.message').textContent = 'Too high!';
      } else {
        //when the player guess Low number
        if (guess < number) {
          document.querySelector('.message').textContent = 'Too low!';
        }
      }
    }
  }
});
