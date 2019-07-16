import readlineSync from 'readline-sync';

const getRandomNum = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  const iter = (count) => {
    if (count === 3) return `Congratulations, ${playerName}!`;
    const num = getRandomNum(0, 100);
    const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
    const playerAnswer = readlineSync.question(`Question: ${num}\nYour answer: `);
    if (correctAnswer !== playerAnswer) {
      return `'${playerAnswer}' is wrong answer ;). Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`;
    }
    console.log('Correct!');
    return iter(count + 1);
  };

  console.log(iter(0));
};
