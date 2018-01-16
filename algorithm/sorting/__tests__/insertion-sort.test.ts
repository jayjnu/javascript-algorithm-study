import { insertionSort } from '../insertion-sort';

function testAll(input: number[]) {
  it('should sort array in ascending order', () => {
    expect(insertionSort(input, (a, b) => a - b)).toEqual(input.sort((a, b) => a - b));
  })
  
  it('should sort array in descending order', () => {
    expect(insertionSort(input, (a, b) => b - a)).toEqual(input.sort((a, b) => b - a));
  })
}


describe('insertionSort', () => {
  const input = [
    [5, 2, 7, 3, 4, 7],
    [4, 2, 5, 7, 9, 20],
    [75, 21, 7, 7, 7]
  ];

  input.forEach(testAll)
  
});