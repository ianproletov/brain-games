import gameEngine from '..';
import getRandomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const defineCorrectAnswer = (num1, num2) => {
  let nod = Math.min(num1, num2);
  while (num1 % nod !== 0 || num2 % nod !== 0) {
    nod -= 1;
  }
  return nod;
};

const generateGcdStep = () => {
  const firstNum = getRandomNumber(1, 99);
  const secondNum = getRandomNumber(1, 99);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = defineCorrectAnswer(firstNum, secondNum);
  return cons(correctAnswer, question);
};

const taskExplanation = 'Find the greatest common divisor of given numbers.';

export default () => gameEngine(generateGcdStep, taskExplanation);
