class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  #rInsert(value, currentNode = this.root) {
    if (currentNode === null) return new Node(value)
    if (value < currentNode.value) {
      currentNode.left = this.#rInsert(value, currentNode.left)
    }
    else if (value > currentNode.value) {
      currentNode.right = this.#rInsert(value, currentNode.right)
    }
    return currentNode
  }

  rInsert(value) {
    if (this.root === null) this.root = new Node(value)
    this.#rInsert(value)
  }
}

let myBST = new BST();
myBST.rInsert(47)
myBST.rInsert(21)
myBST.rInsert(76)
myBST.rInsert(18)
myBST.rInsert(27)
myBST.rInsert(52)
myBST.rInsert(82)


console.log("\nRoot: " + myBST.root.value);
console.log("\nRoot->Left: " + myBST.root.left.value);
console.log("\nRoot->Right: " + myBST.root.right.value);
