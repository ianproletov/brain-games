import gameEngine from '..';

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

const firstNum = () => randomNumber();
const secondNum = () => randomNumber();
const taskStr = (num1, num2, operator) => `${num1} ${operator} ${num2}`;
const taskExpl = 'What is the result of the expression?\n';
export default () => gameEngine(firstNum, secondNum, operation, randomOperator, taskStr, taskExpl);
