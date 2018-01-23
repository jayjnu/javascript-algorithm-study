/**
 * Problems - divide and conquer!!!!!
 * 1. get pivot value
 * 2. push value smaller than pivot to left array
 * 3. push value bigger than pivot to right array
 * 4. repeat until there is no more pairs to compare
 * 5. concat two sorted arrays until there's nothing left to merge
 */

interface comparator<T> {
  (a: T, b: T): boolean|number
}

export function partition<T>(arr: T[], left: number, right: number, compare: comparator<T>): number {
  const pivot = Math.floor((right + left) / 2)
  let i = left;
  let j = right;

  while(i <= j) {

    while(compare(arr[i], arr[pivot]) < 0) {
      i++
    }

    while(compare(arr[j], arr[pivot]) > 0) {
      j--
    }

    if (i <= j) {
      swap(arr, i, j)
      i++
      j--
    }
  }

  return i
}

export function quickSort<T>(arr: T[], compare: comparator<T>): T[] {

  function _sort(arr: T[], left: number, right: number): void {
    if (arr.length > 1) {
      const index = partition(arr, left, right, compare)
      if (left < index - 1) {
        _sort(arr, left, index - 1)
      }
      if (index < right) {
        _sort(arr, index, right)
      }
    }
  }

  _sort(arr, 0, arr.length - 1)

  return arr
}

function swap<T>(arr: T[], i: number, j: number) {
  const tmp = arr[j]
  arr[j] = arr[i]
  arr[i] = tmp
}