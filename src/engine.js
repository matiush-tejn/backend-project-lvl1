import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (description, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const playerName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  const iter = (i) => {
    if (i > roundsCount) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }
    const [question, rightAnswer] = getGameData();
    const playerAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (rightAnswer !== playerAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;). Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
    iter(i + 1);
  };

  iter(1);
};
