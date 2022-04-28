let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};
  
const getAbsoluteDistance = (a, b) => Math.abs(a - b);

// 4. returns true if user is closer to target, or tie; returns false if computer is closer to target. alerts if guess is out of range.
const compareGuesses = (humansGuess, computersGuess, targetNum) => {
  if ((humansGuess < 0) || (humansGuess > 9)){
   window.alert('You\'ve lost for being a smartass! Next time, stay in the safe zone of 0 through 9!');
  } else if ((getAbsoluteDistance(humansGuess, targetNum)) <= (getAbsoluteDistance(computersGuess, targetNum))){
    return true;
  } else {
    return false;
  };
};

// 5. announces winner and updates score.
const updateScore = winner => {
  if (winner === 'human') {
    humanScore ++;
  } else {
    computerScore ++;
  };
};

// 6. activates the 'Next Round' botton.
const advanceRound = () => currentRoundNumber ++;