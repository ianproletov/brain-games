import gameEngine from '..';
import { cons, car, cdr } from 'hexlet-pairs';

const gameGeneration = () => {
  let progElement = Math.floor(Math.random() * (99 - 1)) + 1;
  const position = Math.floor(Math.random() * 10) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  let taskStr = '';
  let corAnswer;
  for (let i = 1; i <= 10; i += 1) {
    if (i === position) {
      corAnswer = String(progElement);
      taskStr += '.. ';
    } else {
      taskStr += `${progElement} `;
    }
    progElement += step;
  }
  return cons(corAnswer, taskStr);
};

const gameAnswer = game => car(game);

const gameTask = game => cdr(game);

const taskExpl = 'What number is missing in the progression?\n';

export default () => gameEngine(gameGeneration, gameAnswer, gameTask, taskExpl);
