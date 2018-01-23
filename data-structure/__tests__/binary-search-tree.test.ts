import {BinarySearchTree} from "../binary-search-tree/index"

const TEST_IN_ORDER = {
  input: [4, 2, 3, 1, 6],
  expect: [1, 2, 3, 4, 6]
}
describe('BST', () => {
  test(`#insert should generate same outputs`, (done) => {
    const bstA = new BinarySearchTree()
    const bstB = new BinarySearchTree()
    TEST_IN_ORDER.input.forEach((key) => {
      bstA.insertRecursively(key)
      bstB.insertIteratively(key)
    })


    const bstAResult:number[] = []
    const bstBResult:number[] = []

    bstA.inOrder(bstA.root, (node) => bstAResult.push(node.key as number))
    bstB.inOrder(bstB.root, (node) => bstBResult.push(node.key as number))

    expect(bstAResult).toEqual(bstBResult)
    done()
  })

  test('#search should return the same key', (done) => {
    const bst = new BinarySearchTree()
    TEST_IN_ORDER.input.forEach((key) => {
      bst.insertRecursively(key)
    })

    expect(bst.searchRecursively(4, bst.root)).toEqual(bst.searchIteratively(5))
    done()
  })
})