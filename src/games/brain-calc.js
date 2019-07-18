import gameEngine from '..';
import { getRandomNum } from '../utils';

const description = 'What is the result of the expression?';

const operations = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

const getGameData = () => {
  const num1 = getRandomNum(0, 99);
  const num2 = getRandomNum(0, 99);
  const [operationSign, operation] = operations[getRandomNum(0, operations.length - 1)];
  const question = `${num1} ${operationSign} ${num2}`;
  const rightAnswer = `${operation(num1, num2)}`;
  return [question, rightAnswer];
};

export default () => gameEngine(description, getGameData);
