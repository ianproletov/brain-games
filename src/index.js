import readlineSync from 'readline-sync';

const nameQuestion = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}\n`);
  return userName;
};

const randomNumber = () => Math.floor(Math.random() * (99 - 1)) + 1;

const randomOperator = () => {
  let res;
  switch (Math.floor(Math.random() * 3) + 1) {
    case 1:
      res = '+';
      break;
    case 2:
      res = '-';
      break;
    case 3:
      res = '*';
      break;
    default:
      return null;
  }
  return res;
};

const operation = (num1, num2, operator) => {
  let res;
  switch (operator) {
    case '*':
      res = String(num1 * num2);
      break;
    case '-':
      res = String(num1 - num2);
      break;
    case '+':
      res = String(num1 + num2);
      break;
    case '%':
      res = num1 % num2 === 0 ? 'yes' : 'no';
      break;
    default:
      return null;
  }
  return res;
};

const correct = (answer, num1, num2, operator) => {
  const corAnswer = operation(num1, num2, operator);
  if (answer === corAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${corAnswer}'`);
  return false;
};

const evenQuestion = () => {
  const questionNumber = randomNumber();
  const userAnswer = readlineSync.question(`Question: ${questionNumber}\nYour answer: `);
  return correct(userAnswer, questionNumber, 2, '%');
};

const calcQuestion = () => {
  const firstNum = randomNumber();
  const secondNum = randomNumber();
  const operator = randomOperator();
  const userAnswer = readlineSync.question(`Question: ${firstNum} ${operator} ${secondNum}\nYour answer: `);
  return correct(userAnswer, firstNum, secondNum, operator);
};

export default (typeOfGame) => {
  console.log('Welcome to the Brain Games!\n');
  const userName = nameQuestion();
  let gameQuestion;
  switch (typeOfGame) {
    case 'even':
      console.log('Answer "yes" if number even otherwise answer "no".\n');
      gameQuestion = evenQuestion;
      break;
    case 'calc':
      console.log('What is the result of the expression?\n');
      gameQuestion = calcQuestion;
      break;
    default:
      return null;
  }
  const iter = (acc) => {
    if (acc === 3) {
      console.log(`Congratiulations, ${userName}!`);
      return null;
    }
    if (gameQuestion()) {
      return iter(acc + 1);
    }
    console.log(`Let's try again, ${userName}!`);
    return null;
  };
  return iter(0);
};
