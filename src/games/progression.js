import gameEngine from '..';
import { getRandomNum } from '../utils';

const description = 'What number is missing in the progression?';

const getProgression = (first, step) => {
  const iter = (num, acc) => (acc.length < 10 ? iter(num + step, [...acc, num]) : acc);
  return iter(first, []);
};

const getGameData = () => {
  const first = getRandomNum(0, 99);
  const step = getRandomNum(1, 9);
  const indexOfHidden = getRandomNum(0, 9);
  const progression = getProgression(first, step);
  const question = progression.map((num, i) => (i === indexOfHidden ? '..' : num)).join(' ');
  const rightAnswer = `${progression[indexOfHidden]}`;
  return [question, rightAnswer];
};

export default () => gameEngine(description, getGameData);
