import gameEngine from '..';
import getRandomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const progressionLength = 10;

const generateProgressionStep = () => {
  const firstElement = getRandomNumber(1, 99);
  const hiddenElementPosition = getRandomNumber(0, progressionLength - 1);
  const step = getRandomNumber(1, 10);
  let question = '';
  let correctAnswer;
  for (let i = 0; i < progressionLength; i += 1) {
    const currentElement = firstElement + step * i;
    if (i === hiddenElementPosition) {
      correctAnswer = currentElement;
      question += '.. ';
    } else {
      question += `${currentElement} `;
    }
  }
  return cons(correctAnswer, question);
};

const taskExplanation = 'What number is missing in the progression?';

export default () => gameEngine(generateProgressionStep, taskExplanation);
