export class Node<T> {
  key: T
  left: Node<T>
  right: Node<T>
  constructor(key: T) {
    this.key = key
  }
}