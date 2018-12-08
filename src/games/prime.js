import generateGame from '..';
import getRandomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const isPrime = (num) => {
  for (let i = 2; i <= Math.floor(num / 2); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const generateProgressionStep = () => {
  const num = getRandomNumber(1, 99);
  const question = `${num}`;
  const correctAnswer = isPrime(num);
  return cons(correctAnswer, question);
};

const taskExplanation = 'Answer "yes" if given number is prime. Otherwise answer "no"';

export default () => generateGame(generateProgressionStep, taskExplanation);
