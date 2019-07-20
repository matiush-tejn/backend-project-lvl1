import gameEngine from '..';
import getRandomNum from '../utils';

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
  const question = getRandomNum(1, 99);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question.toString(), rightAnswer];
};

export default () => gameEngine(description, getGameData);
