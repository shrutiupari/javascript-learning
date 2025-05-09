class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = this.head
  }

  printList() {
    let temp = this.head
    while (temp !== null) {
      temp = temp.next
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log("tail: null");
    } else {
      console.log("Tail: " + this.tail.value);
    }
  }

  makeEmpty() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
  }

  findMiddleNode() {
    let slow_ptr = this.head
    let fast_ptr = this.head

    while (fast_ptr != null && fast_ptr.next != null) {
      fast_ptr = fast_ptr.next.next
      slow_ptr = slow_ptr.next
    }
    return slow_ptr
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

const middleNode = myLinkedList.findMiddleNode();
console.log(`\nMiddle node value: ${middleNode.value}`);

let myLinkedList2 = new LinkedList(1);
myLinkedList2.push(2);
myLinkedList2.push(3);
myLinkedList2.push(4);
myLinkedList2.push(5);
myLinkedList2.push(6);

console.log("\nOriginal list 2:");
myLinkedList2.printList();

const middleNode2 = myLinkedList2.findMiddleNode();
console.log(`\nMiddle node value of list 2: ${middleNode2.value}`);