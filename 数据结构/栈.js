/**
 * 栈的特点：先进后出
 */

class Stack {
  constructor() {
    this.items = [];
  }
  get peek() {
    return this.items[this.items.length - 1];
  }
  get isEmpty() {
    return this.items.length === 0;
  }
  get size() {
    return this.items.length;
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  clear() {
    this.items = [];
  }
}

const stack = new Stack();
console.log(stack);
stack.push(5);
stack.push(8);
stack.pop();
console.log(JSON.stringify(stack));
stack.push(12);
console.log(JSON.stringify(stack));
console.log(stack.peek);
console.log(JSON.stringify(stack));
console.log(stack.size);
console.log(stack.isEmpty);
stack.clear();
console.log(JSON.stringify(stack));
