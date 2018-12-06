import readlineSync from 'readline-sync';
import { correct, randomNumber, randomOperator } from '..';

export default () => {
  const firstNum = randomNumber();
  const secondNum = randomNumber();
  const operator = randomOperator();
  const userAnswer = readlineSync.question(`Question: ${firstNum} ${operator} ${secondNum}\nYour answer: `);
  return correct(userAnswer, firstNum, secondNum, operator);
};
