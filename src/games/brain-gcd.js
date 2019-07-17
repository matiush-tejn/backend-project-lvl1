import gameEngine from '..';
import { getRandomNum } from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 === num2) return num1;
  const diff = Math.abs(num1 - num2);
  return num1 > num2 ? getGcd(diff, num2) : getGcd(num1, diff);
};

const getGameData = () => {
  const num1 = getRandomNum(1, 99);
  const num2 = getRandomNum(1, 99);
  const question = `${num1} ${num2}`;
  const rightAnswer = `${getGcd(num1, num2)}`;
  return [question, rightAnswer];
};

export default () => gameEngine(description, getGameData);
