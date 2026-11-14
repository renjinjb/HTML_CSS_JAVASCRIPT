"use strict";

// Player 1
const player1 = document.getElementById("name--0");
const player1Score = document.getElementById("score--0");
const player1CurrentScore = document.getElementById("current--0");
const player1Class = document.querySelector(".player--0");
// Player 2
const player2 = document.getElementById("name--1");
const player2Score = document.getElementById("score--1");
const player2CurrentScore = document.getElementById("current--1");
const player2Class = document.querySelector(".player--1");

// Buttons
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Dice Image
const diceImage = document.querySelector(".dice");

// Starting Conditions

let scores, currentScore, activePlayer, playing;

const initialConditions = function () {
  player1Class.classList.remove("player--winner");
  player2Class.classList.remove("player--winner");
  // document.querySelector(".player--0").classList.remove("player-winner");
  // document.querySelector(".player--0").classList.remove("player-winner");
  player1Class.classList.add("player--active");
  player2Class.classList.remove("player--active");
  diceImage.classList.add("hidden");

  player1CurrentScore.textContent = 0;
  player2CurrentScore.textContent = 0;
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  diceImage.classList.add("hidden");
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  diceImage.classList.add("hidden");

  scores = [0, 0]; //[Total Score of Player1, Total Score of Player2]
  currentScore = 0;
  activePlayer = 0;
  playing = true;
};

initialConditions();

// Function to Switch Player
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1Class.classList.toggle("player--active");
  player2Class.classList.toggle("player--active");
};

// Function to Roll Dice
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. Generating a dice roll
    const diceRoll = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice image
    diceImage.classList.remove("hidden");
    diceImage.src = `dice-${diceRoll}.png`;

    //3. Add to current score
    if (diceRoll !== 1) {
      currentScore = currentScore + diceRoll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // player1CurrentScore.textContent = currentScore;
    } else {
      // Switch Player
      // currentScore = 0;
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // player1Class.classList.toggle("player--active");
      // player2Class.classList.toggle("player--active");

      switchPlayer();
    }
  }
});

// Function to hold
btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] = scores[activePlayer] + currentScore;
    // scores[0] = scores[0] + currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >=100 --> Yes Finish the Game --> Player Wins
    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      diceImage.classList.add("hidden");
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // 3. If player's score <100 ---> Switch Player
      switchPlayer();
    }
  }
});

// Function to Reset the Game

btnNew.addEventListener("click", function () {
  initialConditions();
});
