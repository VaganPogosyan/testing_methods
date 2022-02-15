class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

let node1 = new ListNode(1);
let list = {};
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

console.log("=======================");
console.log(node1);
