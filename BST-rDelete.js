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

  minValue(currentNode) {
    while (currentNode.left !== null) {
      currentNode = currentNode.left
    }
    return currentNode.value
  }

  #deleteNode(value, currentNode) {
    if (currentNode === null) return null

    if (value < currentNode.value) {
      currentNode.left = this.#deleteNode(value, currentNode.left)
    } else if (value > currentNode.value) {
      currentNode.right = this.#deleteNode(value, currentNode.right)
    } else {
      if (currentNode.left === null && currentNode.right === null) {
        return null
      } else if (currentNode.left === null) {
        currentNode = currentNode.right
      } else if (currentNode.right === null) {
        currentNode = currentNode.left
      } else {
        let subTreeMin = this.minValue(currentNode.right)
        currentNode.value = subTreeMin
        currentNode.right = this.#deleteNode(subTreeMin, currentNode.right)
      }
    }
    return currentNode
  }

  deleteNode(value) {
    this.root = this.#deleteNode(value, this.root)
  }
}

let myBST = new BST();
myBST.rInsert(2)
myBST.rInsert(1)
myBST.rInsert(3)



console.log("\nBefore Deleting (2) Node: ");
console.log("\n-----------------\n");

console.log("\nRoot: " + myBST.root.value);
console.log("\nRoot->Left: " + myBST.root.left.value);
console.log("\nRoot->Right: " + myBST.root.right.value);

myBST.deleteNode(2)


console.log("\nAfter Deleting (2) Node: ");
console.log("\n-----------------\n");

console.log("\nRoot: " + myBST.root.value);
console.log("\nRoot->Left: " + myBST.root.left.value);
console.log("\nRoot->Right: " + myBST.root.right.value);