import generateGame from '..';
import getRandomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const isEven = number => number % 2 === 0;

const generateEvenStep = () => {
  const number = getRandomNumber(1, 99);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = `${number}`;
  return cons(correctAnswer, question);
};

const taskExplanation = 'Answer "yes" if number even otherwise answer "no".';

export default () => generateGame(generateEvenStep, taskExplanation);
