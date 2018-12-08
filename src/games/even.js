import gameEngine from '..';
import getRandomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const isEven = num => num % 2 === 0;

const defineCorrectAnswer = number => (isEven(number) ? 'yes' : 'no');

const generateGame = () => {
  const num = getRandomNumber(1, 99);
  const corAnswer = defineCorrectAnswer(num);
  const taskStr = `${num}`;
  return cons(corAnswer, taskStr);
};

const taskExplanation = 'Answer "yes" if number even otherwise answer "no".';

export default () => gameEngine(generateGame, taskExplanation);
