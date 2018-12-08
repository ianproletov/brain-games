import generateGame from '..';
import getRandomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.floor(number / 2); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateProgressionStep = () => {
  const num = getRandomNumber(1, 99);
  const question = `${num}`;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return cons(correctAnswer, question);
};

const taskExplanation = 'Answer "yes" if given number is prime. Otherwise answer "no"';

export default () => generateGame(generateProgressionStep, taskExplanation);
