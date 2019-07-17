import gameEngine from '..';
import { getRandomNum } from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  const half = num / 2;
  const iter = (div) => {
    if (div > half) return true;
    return num % div > 0 ? iter(div + 1) : false;
  };
  return iter(2);
};

const getGameData = () => {
  const num = getRandomNum(1, 99);
  const question = `${num}`;
  const rightAnswer = isPrime(num) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => gameEngine(description, getGameData);
