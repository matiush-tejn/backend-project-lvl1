import gameEngine from '..';
import { getRandomNum } from '../utils';

const description = 'What is the result of the expression?';

const operations = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

const getGameData = () => {
  const min = 0;
  const max = 99;
  const num1 = getRandomNum(min, max);
  const num2 = getRandomNum(min, max);
  const [operationSign, operation] = operations[getRandomNum(0, operations.length - 1)];
  const question = `${num1} ${operationSign} ${num2}`;
  const rightAnswer = `${operation(num1, num2)}`;
  return [question, rightAnswer];
};

export default () => gameEngine(description, getGameData);
