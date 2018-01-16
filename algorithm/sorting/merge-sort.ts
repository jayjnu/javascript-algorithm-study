export interface comparator<T> {
  (...args: T[]): number
}

/**
 * Sort an array using merge sort Algorithm
 * @param arr 
 * @param compare 
 */
export function mergeSort<T>(arr: T[], compare: comparator<T>) {

  /**
   * Sorting happens in this function
   * 
   * Process 1. comapare and merge elements
   * - compare values of left and right
   * - remove and push left /right element to merged array,
   *    until either one is out of element
   * 
   * Process 2. 
   * 
   * 
   * @param left 
   * @param right 
   */
  function merge(left: T[], right: T[]): T[] {
    const merged:T[] = [];

    // Process 1
    while(left.length && right.length) {
      if (compare(left[0], right[0]) <= 0) {
        merged.push(left.shift())
      } else {
        merged.push(right.shift())
      }
    }

    while(left.length) {
      merged.push(left.shift())
    }

    while(right.length) {
      merged.push(right.shift())
    }

    return merged
  }

  /**
   * Break array down recursively,
   * until there's only one element and returns array with only one element
   * 
   * @param {T} arr 
   * @returns {T} arr
   */
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

