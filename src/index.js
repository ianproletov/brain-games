import readlineSync from 'readline-sync';

export const question = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  return userName;
};

const randomNumber = () => Math.floor(Math.random() * (99 - 1)) + 1;

const correct = (answer, number) => {
  if (answer === 'yes' && number % 2 === 0) {
    return true;
  }
  if (answer === 'no') {
    return true;
  }
  return false;
};

const evalQuestion = () => {
  const questionNumber = randomNumber();
  const answer = readlineSync.question(`Question: ${questionNumber}`);
  return correct(answer, questionNumber);
};

export const evalGame = () => {
  const userName = question();
  const iter = (acc) => {
    if (acc === 3) {
      console.log(`Congratiulations, ${userName}`);
    }
    if (evalQuestion()) {
      return iter(acc + 1);
    }
    console.log()
    return 
  };
  return iter(0);
};
