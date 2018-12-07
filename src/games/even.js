import gameEngine from '..';
import { cons, car, cdr } from 'hexlet-pairs';

const questionNumber = () => Math.floor(Math.random() * (99 - 1)) + 1;

const isEven = num => num % 2 === 0;

const operation = (number) => {
  if (isEven(number)) {
    return 'yes';
  }
  return 'no';
};

const taskExpl = 'Answer "yes" if number even otherwise answer "no".\n';

const gameGeneration = () => {
  const num = questionNumber();
  const corAnswer = operation(num);
  const taskStr = `${num}`;
  return cons(corAnswer, taskStr);
};

const gameAnswer = game => car(game);

const gameTask = game => cdr(game);

export default () => gameEngine(gameGeneration, gameAnswer, gameTask, taskExpl);
