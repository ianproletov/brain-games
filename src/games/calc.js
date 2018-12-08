import gameEngine from '..';
import getRandomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const generateCalcStep = () => {
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
  const question = `${firstNum} ${currentOperationChar} ${secondNum}`;
  return cons(operationRes, question);
};

const taskExplanation = 'What is the result of the expression?';

export default () => gameEngine(generateCalcStep, taskExplanation);
