import readlineSync from 'readline-sync';

export default (description, getGameData) => {
  console.log(`Welcome to the Brain Games!\n${description}\n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  const game = (count) => {
    const [question, rightAnswer] = getGameData();
    const playerAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (rightAnswer !== playerAnswer) {
      return `'${playerAnswer}' is wrong answer ;). Correct answer was '${rightAnswer}'.\nLet's try again, ${playerName}!`;
    }
    console.log('Correct!');
    return count < 3 ? game(count + 1) : `Congratulations, ${playerName}!`;
  };

  console.log(game(1));
};
