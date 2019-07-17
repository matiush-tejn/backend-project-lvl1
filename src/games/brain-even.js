import gameEngine from '..';

const getRandomNum = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

const getGameData = () => {
  const num = getRandomNum(0, 100);
  const question = `${num}`;
  const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => gameEngine(getGameData);
