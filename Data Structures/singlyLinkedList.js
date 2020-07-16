class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

// var first = new Node("hi");
// first.next = new Node("there");

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){
    let newNode = new Node(val);
    if (this.head === null){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(){
    if(!this.head) return null;
    let current = this.head;
    let pre = null;
    while (current.next) {
      pre = current;
      current = current.next;
    }
    pre.next = null;
    this.tail = pre;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift(){
    if(!this.head) return null;
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return current;
  }

  unshift(val){
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx){
    if (idx < 0 || idx >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < idx; i++) current = current.next;
    return current;
  }

  set(idx, val){
    let node = get(idx);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(idx, val){
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) this.push(val);
    if (idx === 0) this.unshift(val);
    if (idx > 0 && idx < this.length) {
      let newNode = new Node(val);
      let prev = this.get(idx-1);
      newNode.next = prev.next;
      prev.next = newNode;
      this.length++;
    }
    return true;
  }

  remove(idx){
    let result = null;
    if (idx === this.length - 1) result = this.pop();
    if (idx === 0) result = this.shift();
    if (idx > 0 && idx < this.length - 1) {
      let prev = this.get(idx-1);
      result = prev.next;
      prev.next = result.next;
      this.length--;
    }
    return result;
  }

  reverse(){
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let prev = null;
    let next;
    for (let i = 0; i<this.length; i++){
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }
}
