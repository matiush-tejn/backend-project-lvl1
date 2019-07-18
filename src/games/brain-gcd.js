import gameEngine from '..';
import { getRandomNum } from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 === num2) return num1;
  const diff = Math.abs(num1 - num2);
  return num1 > num2 ? getGcd(diff, num2) : getGcd(num1, diff);
};

const getGameData = () => {
  const min = 1;
  const max = 99;
  const num1 = getRandomNum(min, max);
  const num2 = getRandomNum(min, max);
  const question = `${num1} ${num2}`;
  const rightAnswer = `${getGcd(num1, num2)}`;
  return [question, rightAnswer];
};

export default () => gameEngine(description, getGameData);
