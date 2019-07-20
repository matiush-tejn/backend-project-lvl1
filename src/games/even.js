import gameEngine from '..';
import getRandomNum from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const getGameData = () => {
  const question = getRandomNum(0, 99);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question.toString(), rightAnswer];
};

export default () => gameEngine(description, getGameData);
