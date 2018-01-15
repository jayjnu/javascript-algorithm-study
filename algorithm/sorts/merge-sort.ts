/**
 * Problems
 * - Divide and conquer
 * 
 * - end condition: arr.length === 1
 * 
 */


interface comparator<T> {
  (...args: T[]): number
}

export function mergeSort<T>(arr: T[], compare: comparator<T>) {

  function merge(left: T[], right: T[]): T[] {
    return left
  }

  function mergeSortRecursive(arr: T[]): T[] {
    const length = arr.length;
    if (length === 1) {
      return arr;
    }
  
    const mid = Math.floor(length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)
  
    return merge(
      mergeSortRecursive(left),
      mergeSortRecursive(right)
    )
  }
  
  return mergeSortRecursive(arr)
}

