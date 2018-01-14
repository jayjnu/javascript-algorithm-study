export class Node<T> {
  value: T
  left: Node<T>
  right: Node<T>
  constructor(value: T) {
    this.value = value
  }

  isLeaf(): boolean {
    return !this.left && !this.right;
  }
}