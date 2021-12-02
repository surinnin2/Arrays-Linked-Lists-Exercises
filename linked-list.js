/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length += 1
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val)
    newNode.next = this.head
    this.head = newNode
    this.length += 1
    if (this.length === 1) {
      this.tail = newNode
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 1) {
      let current = this.head
      this.head = null
      this.tail = null
      this.length -= 1
      return current.val
    }

    let current = this.head
    let prev = null
    while(current) {
      prev = current
      current = this.next
    }
    current = prev.next
    prev.next = null
    this.tail = prev
    this.length -= 1
    return current.val
  }

  /** shift(): return & remove first item. */

  shift() {
    let prevHead = this.head
    this.head = this.head.next
    prevHead.next = null
    this.length -= 1

    if (this.length === 0) {
      this.tail = null
    }


    return prevHead.val
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let current = this.head
    for (let i = 0; i < idx; i++) {
      current = current.next
    }
    return current.val
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let current = this.head
    for (let i = 0; i < idx; i++) {
      current = current.next
    }
    current.val = val
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const newNode = new Node(val)
    if (this.length === 0) {
      this.push(val)
    } else if (this.length === idx) {
      return this.push(val)
    } else {
      let current = this.head
      let prev = null
      for (let i=0; i < idx; i++) {
        prev = current
        current = current.next     
      }
    
      prev.next = newNode
      newNode.next = current
      this.length += 1
    }

    
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx === 0) {
      this.shift()
    } else {
      let current = this.head
      let prev = null
      let next = null
      for (let i=0; i < idx; i++) {
        prev = current
        current = current.next
        next = current.next
      }
      current.next = null
      prev.next = next
      return current
    }

    
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0
    }

    let current = this.head
    let sum = 0
    let count = 0
    while (current) {
      count += 1
      sum += current.val
      current = current.next
    }
    return sum/count
  }
}

module.exports = LinkedList;
