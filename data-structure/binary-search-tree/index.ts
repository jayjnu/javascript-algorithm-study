import {Node} from "./node"

export class BinarySearchTree<T> {
  root: Node<T>

  constructor() {
  }

  searchRecursively(key: T, node: Node<T>): Node<T> {
    if (!node || node.key === key) {
      return node
    }
    if (node.left) {
      return this.searchRecursively(key, node.left)
    }
    if (node.right) {
      return this.searchRecursively(key, node.right)
    }
  }

  searchIteratively(key: T): Node<T> {
    let node = this.root
    while (node) {
      if (node.key === key) {
        return node
      }
      if (node.left) {
        if (node.left.key < key) {
          node = node.left
        } else {
          node = node.right
        }
      } else if (node.right) {
        if (node.right.key < key) {
          node = node.right
        } else {
          node = node.left
        }
      }
    }
    return node
  }

  insertRecursively(key: T): Node<T> {
    if (!this.root) {
      this.root = new Node(key)
      return
    }

    function _insert(node: Node<T>) {
      if (!node) {
        node = new Node(key)
      } else if (key < node.key) {
        node.left = _insert(node.left)
      } else {
        node.right = _insert(node.right)
      }
      return node
    }

    _insert(this.root)
  }

  insertIteratively(key: T) {
    if (!this.root) {
      this.root = new Node(key)
      return
    }
    let node = this.root
    while (true) {
      if (key < node.key) {
        if (node.left) {
          node = node.left
        } else {
          node.left = new Node(key)
          break
        }
      } else if (key > node.key) {
        if (node.right) {
          node = node.right
        } else {
          node.right = new Node(key)
          break
        }
      } else {
        node = new Node(key)
        break
      }
    }
    return node
  }

  remove() {

  }

  preOrder() {

  }

  inOrder(node: Node<T>, fn: (node: Node<T>) => void) {
    if (!node) {
      return
    }
    this.inOrder(node.left, fn)
    fn(node)
    this.inOrder(node.right, fn)
  }

  postOrder() {

  }
}