import readlineSync from 'readline-sync';

export const question = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}\n`);
  return userName;
};

const randomNumber = () => Math.floor(Math.random() * (99 - 1)) + 1;

const correct = (answer, number) => {
  const corAnswer = number % 2 === 0 ? 'yes' : 'no';
  if (answer === corAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${corAnswer}'`);
  return false;
};

const evalQuestion = () => {
  const questionNumber = randomNumber();
  const answer = readlineSync.question(`Question: ${questionNumber}\nYour answer: `);
  return correct(answer, questionNumber);
};

export const evalGame = () => {
  const userName = question();
  const iter = (acc) => {
    if (acc === 3) {
      console.log(`Congratiulations, ${userName}!`);
      return null;
    }
    if (evalQuestion()) {
      return iter(acc + 1);
    }
    console.log(`Let's try again, ${userName}!`);
    return null;
  };
  return iter(0);
};
