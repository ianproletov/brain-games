import gameEngine from '..';
import getRandomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const generateGame = () => {
  const firstElement = getRandomNumber(1, 99);
  let currentElement = firstElement;
  const hiddenElementPosition = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  let taskStr = '';
  let correctAnswer;
  const progressionLength = 10;
  for (let i = 1; i <= progressionLength; i += 1) {
    if (i === hiddenElementPosition) {
      correctAnswer = currentElement;
      taskStr += '.. ';
    } else {
      taskStr += `${currentElement} `;
    }
    currentElement = firstElement + step * i;
  }
  return cons(correctAnswer, taskStr);
};

const taskExplanation = 'What number is missing in the progression?';

export default () => gameEngine(generateGame, taskExplanation);
