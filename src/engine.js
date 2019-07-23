import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (description, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const playerName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  const iter = (i) => {
    const [question, rightAnswer] = getGameData();
    const playerAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (rightAnswer !== playerAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;). Correct answer was '${rightAnswer}'.`);
      return `Let's try again, ${playerName}!`;
    }
    console.log('Correct!');
    return i < roundsCount ? iter(i + 1) : `Congratulations, ${playerName}!`;
  };

  console.log(iter(1));
};
