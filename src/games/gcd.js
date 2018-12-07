import gameEngine from '..';
import { cons, car, cdr } from 'hexlet-pairs';

const randomNumber = () => Math.floor(Math.random() * (99 - 1)) + 1;

const operation = (num1, num2) => {
  let nod = num1 > num2 ? num2 : num1;
  while (num1 % nod !== 0 || num2 % nod !== 0) {
    nod -= 1;
  }
  return String(nod);
};

const gameGeneration = () => {
  const firstNum = randomNumber();
  const secondNum = randomNumber();
  const taskStr = `${firstNum} ${secondNum}`;
  const corAnswer = operation(firstNum, secondNum);
  return cons(corAnswer, taskStr);
};

const gameAnswer = game => car(game);

const gameTask = game => cdr(game);

const taskExpl = 'Find the greatest common divisor of given numbers.\n';

export default () => gameEngine(gameGeneration, gameAnswer, gameTask, taskExpl);
