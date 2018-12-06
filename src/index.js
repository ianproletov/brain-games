import readlineSync from 'readline-sync';

export default (firstNum, secondNum, operation, operator, taskStr, taskExpl = '') => {
  console.log(`Welcome to the Brain Games!\n${taskExpl}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}\n`);
  const iter = (acc) => {
    if (acc === 3) {
      console.log(`Congratiulations, ${userName}!`);
      return null;
    }
    const actualFirst = firstNum();
    const actualSecond = secondNum();
    const actualOperator = operator();
    const actualTaskStr = taskStr(actualFirst, actualSecond, actualOperator);
    const userAnswer = readlineSync.question(`Question: ${actualTaskStr}\nYour answer: `);
    const corAnswer = operation(actualFirst, actualSecond, actualOperator);
    if (userAnswer === corAnswer) {
      console.log('Correct!');
      return iter(acc + 1);
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${corAnswer}'`);
    console.log(`Let's try again, ${userName}!`);
    return null;
  };
  if (firstNum === undefined) {
    return null;
  }
  return iter(0);
};
