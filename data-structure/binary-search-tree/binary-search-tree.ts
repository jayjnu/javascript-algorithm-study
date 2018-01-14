import { Node } from "./node"

export class BinarySearchTree<T> {
  root: Node<T>
  constructor() {

  }
  insert(value: T) {
    if (!this.root) {
      this.root = new Node(value)
    } else {
      let node = this.root;
      while(node.isLeaf()) {
        
      }
    }
  }

  traverse() {

  }

  deleteNode() {

  }

  preOrder() {

  }

  inOrder() {

  }

  postOrder() {

  }
}