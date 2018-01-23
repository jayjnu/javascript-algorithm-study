import { quickSort } from "../quick-sort";

function asc(a:number, b:number) {
 return a - b
}

function desc(a:number, b:number) {
  return b - a
}

function testAll(input: number[]) {
  it('should sort array in ascending order', () => {
    expect(quickSort(input, (a, b) => a - b)).toEqual(input.sort((a, b) => a - b));
  })
  
  it('should sort array in descending order', () => {
    expect(quickSort(input, (a, b) => b - a)).toEqual(input.sort((a, b) => b - a));
  })
}

describe('quickSort', () => {
  const input = [
    [5, 2, 7, 3, 4, 7],
    [4, 2, 5, 7, 9, 20],
    [75, 21, 7, 7, 7]
  ];

  input.forEach(testAll)
  
});