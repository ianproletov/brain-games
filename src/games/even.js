import generateGame from '..';
import getRandomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const isEven = num => num % 2 === 0;

const defineCorrectAnswer = number => (isEven(number) ? 'yes' : 'no');


const generateEvenStep = () => {
  const num = getRandomNumber(1, 99);
  const correctAnswer = defineCorrectAnswer(num);
  const question = `${num}`;
  return cons(correctAnswer, question);
};

const taskExplanation = 'Answer "yes" if number even otherwise answer "no".';

export default () => generateGame(generateEvenStep, taskExplanation);
