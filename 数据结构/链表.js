/**
 * 链表: 存贮有序元素的集合
 * 但是不同于数组，每个元素是一个存贮元素本身的节点和指向下一个元素引用组成
 * 要想访问链表中间的元素，需要从起点开始遍历找到所需元素
 */

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  get isEmpty() {
    return this.length === 0;
  }
  get size() {
    return this.length;
  }
  // 追加元素
  append(item) {
    const node = new Node(item);
    let current = null;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }
  // 任意位置插入元素
  insert(position, item) {
    if (position >= 0 && position <= this.length) {
      const node = new Node(item);
      let current = this.head;
      let previous = null;
      let index = 0;
      if (position === 0) {
        this.head = node;
        node.next = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      this.length++;
      return true;
    }
    return false;
  }
  // 移除指定位置元素
  removeAt(position) {
    if (position > -1 && position < this.length) {
      let current = this.head;
      let previous = null;
      let index = 0;
      if (position === 0) {
        this.head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.length--;
      return current.item;
    }
    return null;
  }
  // 寻找元素下标
  findIndex(item) {
    let current = this.head;
    let index = -1;
    while (current) {
      if (item === current.item) {
        return index + 1;
      }
      index++;
      current = current.next;
    }
    return -1;
  }
  // 删除指定文档
  remove(item) {
    const index = this.findIndex(item);
    return this.removeAt(index);
  }
  toString() {
    let current = this.head;
    let string = '';
    while (current) {
      string += ` ${current.item}`;
      current = current.next;
    }
    return string;
  }
}

const linkList = new LinkList();

console.log(JSON.stringify(linkList));
linkList.append(123);
linkList.append(456);
linkList.append(789);
linkList.removeAt(2);
linkList.insert(0, 24);
console.log(linkList.findIndex(24));
linkList.insert(1, 46);
console.log(JSON.stringify(linkList));
console.log(linkList.toString());
