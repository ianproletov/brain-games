import gameEngine from '..';

const randomNumber = () => Math.floor(Math.random() * (99 - 1)) + 1;

const operation = (num1, num2) => {
  let nod = num1 > num2 ? num2 : num1;
  while (num1 % nod !== 0 && num2 % nod !== 0) {
    nod -= 1;
  }
  return String(nod);
};

const firstNum = () => randomNumber();
const secondNum = () => randomNumber();
const taskStr = (num1, num2) => `${num1} ${num2}`;
const taskExpl = 'Find the greatest common divisor of given numbers.\n';

export default () => gameEngine(firstNum, secondNum, operation, () => {}, taskStr, taskExpl);
