import gameEngine from '..';
import getRandomNum from '../utils';

const description = 'What number is missing in the progression?';

const getProgressionElements = (first, step, progressionLength) => {
  const iter = (num, acc) => (
    acc.length < progressionLength ? iter(num + step, [...acc, num]) : acc);
  return iter(first, []);
};

const getGameData = () => {
  const firstElementValue = getRandomNum(0, 99);
  const stepProgression = getRandomNum(1, 9);
  const progressionLength = 10;
  const hiddenElementIndex = getRandomNum(0, progressionLength - 1);
  const progressionElements = getProgressionElements(
    firstElementValue, stepProgression, progressionLength,
  );
  const question = progressionElements.map((num, i) => (i === hiddenElementIndex ? '..' : num)).join(' ');
  const rightAnswer = progressionElements[hiddenElementIndex].toString();
  return [question, rightAnswer];
};

export default () => gameEngine(description, getGameData);
