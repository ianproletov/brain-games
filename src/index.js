import readlineSync from 'readline-sync';

const gameEngine = (gameGeneration, gameAnswer, gameTask, taskExpl = '') => {
  console.log(`Welcome to the Brain Games!\n${taskExpl}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}\n`);
  const iter = (acc) => {
    if (acc === 3) {
      console.log(`Congratiulations, ${userName}!`);
      return null;
    }
    const currentGame = gameGeneration();
    const userAnswer = readlineSync.question(`Question: ${gameTask(currentGame)}\nYour answer: `);
    if (userAnswer === gameAnswer(currentGame)) {
      console.log('Correct!');
      return iter(acc + 1);
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameAnswer(currentGame)}'`);
    console.log(`Let's try again, ${userName}!`);
    return null;
  };
  if (gameGeneration === undefined) {
    return null;
  }
  return iter(0);
};

export default gameEngine;
