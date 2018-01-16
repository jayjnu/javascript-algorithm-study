import { mergeSort } from '../merge-sort';

function testAll(input: number[]) {
  it('should sort array in ascending order', () => {
    expect(mergeSort(input, (a, b) => a - b)).toEqual(input.sort((a, b) => a - b));
  })
  
  it('should sort array in descending order', () => {
    expect(mergeSort(input, (a, b) => b - a)).toEqual(input.sort((a, b) => b - a));
  })
}


describe('mergeSort', () => {
  const input = [
    [5, 2, 7, 3, 4, 7],
    [4, 2, 5, 7, 9, 20],
    [75, 21, 7, 7, 7]
  ];

  input.forEach(testAll)
  
});