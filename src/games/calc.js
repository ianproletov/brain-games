import gameEngine from '..';
import getRandomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const generateGame = () => {
  const firstNum = getRandomNumber(1, 99);
  const secondNum = getRandomNumber(1, 99);
  let currentOperationChar;
  let operationRes;
  switch (getRandomNumber(1, 3)) {
    case 1:
      currentOperationChar = '+';
      operationRes = firstNum + secondNum;
      break;
    case 2:
      currentOperationChar = '-';
      operationRes = firstNum - secondNum;
      break;
    case 3:
      currentOperationChar = '*';
      operationRes = firstNum * secondNum;
      break;
    default:
  }
  const taskStr = `${firstNum} ${currentOperationChar} ${secondNum}`;
  return cons(operationRes, taskStr);
};

const taskExplanation = 'What is the result of the expression?';

export default () => gameEngine(generateGame, taskExplanation);
