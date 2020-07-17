class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}


class DoublyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    let newNode = new Node(val);
    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(){
    if(!this.head) return null;
    let result = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
    this.tail = result.prev;
    result.prev = null;
    this.tail.next = null;
  }
    this.length--;
    return result;
  }

  shift(){
    if(!this.head) return null;
    let result = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
    this.head = result.next;
    result.next = null;
    this.head.prev = null;
  }
    this.length--;
    return result;
  }

  unshift(val){
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx){
    if (idx < 0 || idx >= this.length) return null;
    if (idx < Math.floor(this.length/2)){
      let current = this.head;
      for (let i = 0; i < idx; i++) current = current.next;
    } else {
      let current = this.tail
      for (let i = this.length - 1; i >= idx; i--) current = current.prev;
    }
    return current;
  }

  set(idx, val){
    let node = this.get(idx);
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
      let oldNode = this.get(idx);
      newNode.next = oldNode;
      newNode.prev = oldNode.prev;
      oldNode.prev.next = newNode;
      oldNode.prev = newNode;
      this.length++;
    }
    return true;
  }

  remove(idx){
    if (idx < 0 || idx >= this.length) return null;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();
    let result = this.get(idx);
    result.prev.next = result.next;
    result.next.prev = result.prev;
    result.prev = null;
    result.next = null;
    this.length--;
    return result;
  }

  reverse(){
    if(!this.head) return null;
    let current = this.head;
    for (let i=0; i<this.length; i++){
      let beforeNode = current.prev;
      let afterNode = current.next;
      if(!beforeNode) this.tail = current;
      if(!afterNode) this.head = current;
      current.next = beforeNode;
      current.prev = afterNode;
      current = afterNode;
    }
    return this;
  }

}
