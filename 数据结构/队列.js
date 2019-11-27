/**
 * 队列：先进先出
 */

class Queue {
  constructor(items) {
    this.items = items || [];
  }
  get size() {
    return this.items.length;
  }
  get isEmpty() {
    return this.items.length === 0;
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    return this.items.shift();
  }
  front() {
    return this.items[0];
  }
  print() {
    console.log(this.items.toString());
  }
  clear() {
    this.items = [];
  }
}

const queue = new Queue();
queue.enqueue('John');
queue.enqueue('Jake');
console.log(queue);
console.log(queue.size);
console.log(queue.isEmpty);
queue.dequeue();
console.log(queue);
