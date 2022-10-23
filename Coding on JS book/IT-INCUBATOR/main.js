const MIN = 0;
const MAX = 100;
const ATTEMPTS_NUMBER = 10;

const getRandomNumber = (maxLimit) => {
  const randomNumber = Math.round(Math.random() * maxLimit); //[0 - 100)
  return randomNumber;
};

const getPlayerName = () => {
  const palyerName = prompt("Hi! What/'s your name?", "");
  return palyerName;
};

const RANDOM_NUMBER = getRandomNumber(MAX);
const PLAYER_NAME = getPlayerName();

const game = (min, max, attNumber, randomNumber, palyerName) => {
  console.log();
  alert(`${palyerName}, I guessed a number between ${min} to ${max}.
  You have ${attNumber} attempt to guess. Let's go.`);
  for (let index = 1; index <= attNumber; index++) {
    const answer = prompt("What number did I guess?");
    if (answer > randomNumber) {
      let attempt = "attempts"  
      if ((attempt - index) > 1) {
        attempt = "attempt"
      } else ((attempt - index) < 1){
        attempt = "attempts"
      } 
      alert(
        `Your number is greater. You have ${attNumber - index} ${attempt} left.`
      );
    } else if (answer < randomNumber) {
      alert(
        `Your number is less. You have ${attNumber - index} ${attempt} left.`
      );
    } else {
      alert(`You're ROCK STAR!!!`);
      return 
    }
  }
  alert(`${palyerName}, you lose. You had ${attNumber} tries.`);
};

game(MIN, MAX, ATTEMPTS_NUMBER, RANDOM_NUMBER, PLAYER_NAME);
