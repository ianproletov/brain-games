import gameEngine from '..';

const questionNumber = () => Math.floor(Math.random() * (99 - 1)) + 1;
const operation = (num1) => {
  if (num1 % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
const taskStr = num => `${num}`;
const taskExpl = 'Answer "yes" if number even otherwise answer "no".\n';
export default () => gameEngine(questionNumber, () => {}, operation, () => {}, taskStr, taskExpl);
