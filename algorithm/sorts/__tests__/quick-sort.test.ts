import { quickSort, pivotOf } from "../quick-sort";

describe('pivotOf', () => {
  const evenArr = [1,2,3,4,5,6,7,8,9,10]
  const pivotOfEven = 5

  const oddArr = [1,2,3,4,5,6,7,8,9]
  const pivotOfOdd = 5

  test('even array', () => {
    expect(pivotOf(evenArr)).toEqual(pivotOfEven)
  })
  
  test('odd array', () => {
    expect(pivotOf(oddArr)).toEqual(pivotOfOdd)
  })
})

function asc(a:number, b:number) {
 return a - b
}

function desc(a:number, b:number) {
  return b - a
}

test('quickSort', () => {
  const numbers = [2, 0 ,1, 8, 100, 45, 2];
  const strings = 'quicksort'.split('')
  const numberInAscResult = [...numbers].sort(asc)
  const numberInDescResult = [...numbers].sort(desc)

  expect(quickSort(numbers, asc)).toEqual(numberInAscResult)
  expect(quickSort(numbers, desc)).toEqual(numberInDescResult)
})