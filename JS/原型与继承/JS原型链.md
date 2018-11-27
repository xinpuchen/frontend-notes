# JS 原型链

![imgs](https://image-static.segmentfault.com/e4/65/e46508fbcd140db304232aba89f41c83_articlex)

## 定义

JS 只有一种结构，对象。每个对象都有一个私有属性**proto**，它指向它的原型对象的 prototype。该 prototype 对象又具有一个自己的**proto** ，层层向上直到一个对象的原型为 null。根据定义，null 没有原型，并作为这个原型链中的最后一个环节。

### 要点

- 当 new 一个函数的时候会创建一个对象，『函数.prototype』 等于 『被创建对象.**proto**』
- 一切函数都是由 Function 这个函数创建的，所以『Function.prototype === 被创建的函数.**proto**』
- 一切函数的原型对象都是由 Object 这个函数创建的，所以『Object.prototype === 一切函数.prototype.**proto**』

### 原型链顶端

```js
let a = new Function();
a.__proto__; // function
a.__proto__.__proto__; // object
a.__proto__.__proto__.__proto__; // null
```

### 举例：object 实例如何拥有 toString 方法

```js
let obj = {};
obj.toString();

obj.__proto__.toString() === window.Object.prototype.toString(); // true
```

1. obj 对象内为空，没有定义 toString 方法
1. obj 含有私有属性**proto**,在其中发现了 obj.**proto**.toString 方法
1. 实际上调用的是 window.Object.prototype.toString

### 举例：Array 实例如何拥有 push 方法

- 实例化数组，数组 a 本身没有 push 方法
- 沿着原型链向上查找
- 在实例化时继承 Array 原型，获取 Array 原型方法 push

```js
let a = new Array();
a.__proto__ == Array.prototype; // array prototype

a.__proto__.push() === window.Array.prototype.push(); // true
```

### 总结

- Object 是所有对象的爸爸，所有对象都可以通过 **proto** 找到它
- Function 是所有函数的爸爸，所有函数都可以通过 **proto** 找到它
- Function.prototype 和 Object.prototype 是两个特殊的对象，他们由引擎来创建
- 除了以上两个特殊对象，其他对象都是通过构造器 new 出来的
- 函数的 prototype 是一个对象，也就是原型
- 对象的 **proto** 指向原型， **proto** 将对象和原型连接起来组成了原型链
