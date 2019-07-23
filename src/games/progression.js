import engine from '../engine';
import getRandomNum from '../utils';

const description = 'What number is missing in the progression?';

const getProgression = (first, step, len) => {
  const iter = (num, acc) => (
    acc.length < len ? iter(num + step, [...acc, num]) : acc);
  return iter(first, []);
};

const getGameData = () => {
  const first = getRandomNum(0, 99);
  const step = getRandomNum(1, 9);
  const len = 10;
  const elements = getProgression(first, step, len);
  const hiddenElementIndex = getRandomNum(0, len - 1);
  const question = elements.map((num, i) => (i === hiddenElementIndex ? '..' : num)).join(' ');
  const rightAnswer = elements[hiddenElementIndex].toString();
  return [question, rightAnswer];
};

export default () => engine(description, getGameData);
