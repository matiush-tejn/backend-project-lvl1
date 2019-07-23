import engine from '../engine';
import getRandomNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (a === b) return a;
  const diff = Math.abs(a - b);
  return a > b ? getGcd(diff, b) : getGcd(a, diff);
};

const getGameData = () => {
  const min = 1;
  const max = 99;
  const a = getRandomNum(min, max);
  const b = getRandomNum(min, max);
  const question = `${a} ${b}`;
  const rightAnswer = getGcd(a, b).toString();
  return [question, rightAnswer];
};

export default () => engine(description, getGameData);
