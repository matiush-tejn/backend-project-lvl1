import gameEngine from '..';
import { getRandomNum } from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const getGameData = () => {
  const num = getRandomNum(0, 99);
  const question = `${num}`;
  const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => gameEngine(description, getGameData);
