"use strict";
// document.querySelector(".message").textContent = "Correct Number";
// document.querySelector(".number").textContent = 20;
// document.querySelector(".score").textContent = 15;
// document.querySelector(".guess").value;

/*---------------------
//Click Event 
-----------------------*/
//Declare function for the click event
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//Function to Display Score
const scoreDisplay = function () {
  document.querySelector(".score").textContent = score;
};

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
//Event Holder Function
const checkNum = function () {
  const guess = Number(document.querySelector(".guess").value);
  // console.log(guess, typeof guess);

  //Guess is not a number
  if (!guess) {
    displayMessage("⛔ No Number!");
  }

  //When Player Wins
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number");
    // scoreDisplay();
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".message").style.fontSize = "3rem";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
    }

    document.querySelector(".highscore").textContent = highScore;
  }

  //  If guess is wrong
  else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "📈 High Value!!" : "📉 Low Value !!",
      );

      score--;
      scoreDisplay();
    } else {
      displayMessage("😔 You Lost the Game!!!");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#e12525fa";
      document.querySelector(".message").style.fontSize = "3rem";
    }
  }
};
/* //If guess is high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 High Value!!";
      score--;
      // document.querySelector(".score").textContent = score;
      scoreDisplay();
    } else {
      document.querySelector(".message").textContent =
        "😔 You Lost the Game!!!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#e12525fa";
      document.querySelector(".message").style.fontSize = "3rem";
    }
  }

  //If guess is low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Low Value !!";
      score--;
      // document.querySelector(".score").textContent = score;
      scoreDisplay();
    } else {
      document.querySelector(".message").textContent =
        "😔 You Lost the Game!!!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#e12525fa";
      document.querySelector(".message").style.fontSize = "2rem";
    }
  }
};
*/
//Click Event (Event Handler = checkNum())
document.querySelector(".check").addEventListener("click", checkNum);

// Again btn Function
const reset = function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").style.fontSize = "2rem";
};

// Again - Event
document.querySelector(".again").addEventListener("click", reset);
