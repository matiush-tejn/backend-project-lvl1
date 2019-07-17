import gameEngine from '..';
import { getRandomNum } from '../utils';

const description = 'What is the result of the expression?';

const getOperationData = (operationNum) => {
  if (operationNum === 1) return ['+', (a, b) => a + b];
  if (operationNum === 2) return ['-', (a, b) => a - b];
  return ['*', (a, b) => a * b];
};

const getGameData = () => {
  const num1 = getRandomNum(0, 99);
  const num2 = getRandomNum(0, 99);
  const operationNum = getRandomNum(1, 3);
  const [operationSign, operation] = getOperationData(operationNum);
  const question = `${num1} ${operationSign} ${num2}`;
  const rightAnswer = `${operation(num1, num2)}`;
  return [question, rightAnswer];
};

export default () => gameEngine(description, getGameData);
