/**
 * Problems - divide and conquer!!!!!
 * 1. get pivot value
 * 2. push value smaller than pivot to left array
 * 3. push value bigger than pivot to right array
 * 4. repeat until there is no more pairs to compare
 * 5. concat two sorted arrays until there's nothing left to merge
 */

 /**
  * 
  */
interface comparator<T> {
  (a: T, b: T): number
}


/**
 * 
 * @param arr 
 * @param comparator 
 */
export function pivotOf<T>(arr: T[]): T {
  return arr[Math.floor((arr.length - 1) / 2)]
}

function partition<T>(arr: T[]) {
  
}

export function quickSort<T>(arr: T[], comparator: comparator<T>): T[] {

  const pivot = pivotOf(arr);


  return arr
}
