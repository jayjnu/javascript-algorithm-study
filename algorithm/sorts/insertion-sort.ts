function insert<T>(arr: T[], idx: number, element: T) {
  const tmp = arr[idx - 1];
  arr[idx - 1] = element;
  arr[idx] = tmp;
}

type compare = (target: any, unsorted: any) => number

export function insertionSort<T>(arr:T[], compare: compare): T[] {
  const n = arr.length

  for (let i = 0 ; i < n ; i++) {
    const unsorted = arr[i + 1]
    for (let j = i + 1 ; j > -1 ; j--) {
      if (compare(arr[j - 1],  unsorted) > 0) {
        insert(arr, j, unsorted);
      } else {
        arr[j] = unsorted;
        break;
      }
    }
  }
  
  return arr
}