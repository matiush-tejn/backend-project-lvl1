import gameEngine from '..';
import { getRandomNum } from '../utils';

const description = 'What is the result of the expression?';

const getOperationData = () => [['+', (a, b) => a + b], ['-', (a, b) => a - b], ['*', (a, b) => a * b]][getRandomNum(0, 2)];

const getGameData = () => {
  const num1 = getRandomNum(0, 99);
  const num2 = getRandomNum(0, 99);
  const [operationSign, operation] = getOperationData();
  const question = `${num1} ${operationSign} ${num2}`;
  const rightAnswer = `${operation(num1, num2)}`;
  return [question, rightAnswer];
};

export default () => gameEngine(description, getGameData);
