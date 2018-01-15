import { insertionSort } from '../insertion-sort';

test('insertionSort', () => {
  const input = [5, 2, 7, 3, 4, 7];
  expect(insertionSort(input, (a, b) => a - b)).toEqual(input.sort((a, b) => a - b));
  expect(insertionSort(input, (a, b) => b - a)).toEqual(input.sort((a, b) => b - a));
});