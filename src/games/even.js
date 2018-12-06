import readlineSync from 'readline-sync';
import { correct, randomNumber } from '..';

export default () => {
  const questionNumber = randomNumber();
  const userAnswer = readlineSync.question(`Question: ${questionNumber}\nYour answer: `);
  return correct(userAnswer, questionNumber, 2, '%');
};
