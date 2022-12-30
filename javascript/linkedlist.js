class Node {

  constructor(index, value) {
    this.value = value
    this.next = null
    this.prev = null
    this.index = index
  }

  setNext(next) {
    this.next = next
  }

  setPrev(prev) {
    this.prev = prev
  }
}

class LinkedList {

  constructor(array) {
    this.length = array.length
    this.head = this.createListFromArray(array)
  }

  createListFromArray(array) {

    if(array.length == 0) return null

    let head = new Node(0,array[0]) 
    let curr = head

    for(let i = 1; i < array.length; i++) {
      curr.setNext(new Node(i,array[i]))
      curr.next.setPrev(curr)
      curr = curr.next
    } 
    curr.setNext(head)
    head.setPrev(curr)

    return head
  }

  get(index) {
    let cur = this.head

    for(let i = 0; i < index; i++) {
      cur = cur.next
    }

    return cur
  }

  test() {

    let cur = this.head

    for(let i = 0; i < 20; i++) {
      console.log(cur.index)
      cur = cur.prev
    }
  }

}