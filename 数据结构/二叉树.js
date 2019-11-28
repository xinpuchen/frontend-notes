/**
 * 二叉树
 * 特点：每个节点最多有两个子数的树结构
 */

const insertNode = (node, newNode) => {
  if (newNode.key < node.key) {
    if (node.left === null) {
      node.left = newNode;
    } else {
      insertNode(node.left, newNode);
    }
  } else {
    if (node.right === null) {
      node.right = newNode;
    } else {
      insertNode(node.right, newNode);
    }
  }
};

// 访问树节点的三种方式：中序、先序、后序
const inOrderTraverseNode = (node, callback) => {
  if (node) {
    inOrderTraverseNode(node.left, callback);
    // 中序
    inOrderTraverseNode(node.right, callback);
    callback(node.key);
  }
};

const minNode = node => (node ? (node.left ? minNode(node.left) : node) : null);

const maxNode = node =>
  node ? (node.right ? maxNode(node.right) : node) : null;

class NodeTree {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(key) {
    const newNode = new NodeTree(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      insertNode(this.root, newNode);
    }
  }
  inOrderTraverse(callback) {
    inOrderTraverseNode(this.root, callback);
  }
  min(node) {
    return minNode(node || this.root);
  }
  max(node) {
    return maxNode(node || this.root);
  }
}

const tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
console.log(JSON.stringify(tree));
tree.inOrderTraverse(value => {
  console.log(value);
});
console.log(tree.min());
console.log(tree.max());
