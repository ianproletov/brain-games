import gameEngine from '..';
import { cons, car, cdr } from 'hexlet-pairs';

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
    default:
      return null;
  }
  return res;
};

const gameGeneration = () => {
  const firstNum = randomNumber();
  const secondNum = randomNumber();
  const operator = randomOperator();
  const taskStr = `${firstNum} ${operator} ${secondNum}`;
  const corAnswer = operation(firstNum, secondNum, operator);
  return cons(corAnswer, taskStr);
};

const gameAnswer = game => car(game);

const gameTask = game => cdr(game);

const taskExpl = 'What is the result of the expression?\n';

export default () => gameEngine(gameGeneration, gameAnswer, gameTask, taskExpl);
