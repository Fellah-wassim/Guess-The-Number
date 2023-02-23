'use strict';

var number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
var highScore = 0;
let displayMessage = function (message, color) {
  document.querySelector('.message').textContent = message;
  document.querySelector('.message').style.color = color;
};
// document.querySelector('.message').textContent = '☑️ Correct number!';
// document.querySelector('.number').textContent = number;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when the game is over
  if (score === 1) {
    displayMessage('GAME OVER', 'red');
    document.querySelector('.score').textContent = 0;
    //when player doesn't enter any number
  } else if (!guess) {
    displayMessage('🛑 No number Entered!', 'white');
  } else {
    //when the player enter the right number
    if (number === guess) {
      displayMessage('☑️ Correct number!', 'white');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '20rem';
      document.querySelector('.number').textContent = number;
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      //when the player guess hight number
      if (guess > number) {
        displayMessage('Too high!', '#4169e1');
      } else {
        //when the player guess Low number
        if (guess < number) {
          displayMessage('Too low', 'red');
        }
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing... ', 'white');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
