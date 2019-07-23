import engine from '../engine';
import getRandomNum from '../utils';

const description = 'What is the result of the expression?';

const operations = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

const getGameData = () => {
  const min = 0;
  const max = 99;
  const a = getRandomNum(min, max);
  const b = getRandomNum(min, max);
  const [sign, operation] = operations[getRandomNum(0, operations.length - 1)];
  const question = `${a} ${sign} ${b}`;
  const rightAnswer = operation(a, b).toString();
  return [question, rightAnswer];
};

export default () => engine(description, getGameData);
