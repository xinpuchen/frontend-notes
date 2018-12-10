# es6-cheatsheet

## var versus let / const

> 除了 `var` 以外，我们现在多了两个新的标识符来声明变量的存储，它们就是 `let` 和 `const`。
> 不同于 `var` ，`let` 和 `const` 语句不会造成声明提升。

一个 `var` 的例子:

```js
var snack = "Meow Mix";

function getFood(food) {
  if (food) {
    var snack = "Friskies";
    return snack;
  }
  return snack;
}

getFood(false); // undefined
```

让我们再观察下面语句中，使用 `let` 替换了 `var` 后的表现：

```js
let snack = "Meow Mix";

function getFood(food) {
  if (food) {
    let snack = "Friskies";
    return snack;
  }
  return snack;
}

getFood(false); // 'Meow Mix'
```

当我们重构使用 `var` 的老代码时，一定要注意这种变化。盲目使用 `let` 替换 `var` 后可能会导致预期意外的结果。

> **注意**：`let` 和 `const` 是块级作用域语句。所以在语句块以外引用这些变量时，会造成引用错误 `ReferenceError`。

```js
console.log(x);

let x = "hi"; // ReferenceError: x is not defined
```

> **最佳实践**: 在重构老代码时，`var` 声明需要格外的注意。在创建一个新项目时，使用 `let` 声明一个变量，使用 `const` 来声明一个不可改变的常量。

## Replacing IIFEs with Blocks

我们以往创建一个 **立即执行函数** 时，一般是在函数最外层包裹一层括号。
ES6 支持块级作用域（更贴近其他语言），我们现在可以通过创建一个代码块（Block）来实现，不必通过创建一个函数来实现，

```js
(function() {
  var food = "Meow Mix";
})();

console.log(food); // Reference Error
```

使用支持块级作用域的 ES6 的版本：

```js
{
  let food = "Meow Mix";
}

console.log(food); // Reference Error
```

## Arrow Functions

一些时候，我们在函数嵌套中需要访问上下文中的 `this`。比如下面的例子：

```js
function Person(name) {
  this.name = name;
}

Person.prototype.prefixName = function(arr) {
  return arr.map(function(character) {
    return this.name + character; // Cannot read property 'name' of undefined
  });
};
```

一种通用的方式是把上下文中的 `this` 保存在一个变量里：

```js
function Person(name) {
  this.name = name;
}

Person.prototype.prefixName = function(arr) {
  var that = this; // Store the context of this
  return arr.map(function(character) {
    return that.name + character;
  });
};
```

我们也可以把 `this` 通过属性传进去：

```js
function Person(name) {
  this.name = name;
}

Person.prototype.prefixName = function(arr) {
  return arr.map(function(character) {
    return this.name + character;
  }, this);
};
```

还可以直接使用 `bind`：

```js
function Person(name) {
  this.name = name;
}

Person.prototype.prefixName = function(arr) {
  return arr.map(
    function(character) {
      return this.name + character;
    }.bind(this)
  );
};
```

使用 **箭头函数**，`this` 的值不用我们再做如上几段代码的特殊处理，直接使用即可。
上面的代码可以重写为下面这样：

```js
function Person(name) {
  this.name = name;
}

Person.prototype.prefixName = function(arr) {
  return arr.map(character => this.name + character);
};
```

> **最佳实践**：使用箭头函数，再也不用考虑 `this` 的问题了。

当我们编写只返回一个表达式值的简单函数时，也可以使用箭头函数，如下：

```js
var squares = arr.map(function(x) {
  return x * x;
}); // Function Expression
```

```js
const arr = [1, 2, 3, 4, 5];
const squares = arr.map(x => x * x); // Arrow Function for terser implementation
```

> **最佳实践**：尽可能地多使用 **箭头函数**。

## Strings

在 ES6 中，标准库也被同样增强了，像字符串对象就新增了 `.includes()` 和 `.repeat()` 方法。

### .includes( )

```js
var string = "food";
var substring = "foo";

console.log(string.indexOf(substring) > -1);
```

现在，我们可以使用 `.inclues()` 方法，替代以往判断内容 `> -1` 的方式。
`.includes()` 方法会极简地返回一个布尔值结果。

```js
const string = "food";
const substring = "foo";

console.log(string.includes(substring)); // true
```

### .repeat( )

```js
function repeat(string, count) {
  var strings = [];
  while (strings.length < count) {
    strings.push(string);
  }
  return strings.join("");
}
```

在 ES6 中，我们可以使用一个极简的方法来实现重复字符：

```js
// String.repeat(numberOfRepetitions)
"meow".repeat(3); // 'meowmeowmeow'
```

### Template Literals

使用 **字符串模板字面量**，我可以在字符串中直接使用特殊字符，而不用转义。

```js
var text = 'This string contains "double quotes" which are escaped.';
```

```js
let text = `This string contains "double quotes" which don't need to be escaped anymore.`;
```

**字符串模板字面量** 还支持直接插入变量，可以实现字符串与变量的直接连接输出。

```js
var name = "Tiger";
var age = 13;

console.log("My cat is named " + name + " and is " + age + " years old.");
```

更简单的版本：

```js
const name = "Tiger";
const age = 13;

console.log(`My cat is named ${name} and is ${age} years old.`);
```

ES5 中，我们要这样生成多行文本：

```js
var text = "cat\n" + "dog\n" + "nickelodeon";
```

或者：

```js
var text = ["cat", "dog", "nickelodeon"].join("\n");
```

**字符串模板字面量** 让我们不必特别关注多行字符串中的换行转义符号，直接换行即可：

```js
let text = `cat
dog
nickelodeon`;
```

**字符串模板字面量** 内部可以使用表达式，像这样：

```js
let today = new Date();
let text = `The time and date is ${today.toLocaleString()}`;
```

## Destructuring

解构让我们可以使用非常便捷的语法，直接将数组或者对象中的值直接分别导出到多个变量中，

### Destructuring Arrays

**解构数组**

```js
var arr = [1, 2, 3, 4];
var a = arr[0];
var b = arr[1];
var c = arr[2];
var d = arr[3];
```

```js
let [a, b, c, d] = [1, 2, 3, 4];

console.log(a); // 1
console.log(b); // 2
```

### Destructuring Objects

**解构对象**

```js
var luke = { occupation: "jedi", father: "anakin" };
var occupation = luke.occupation; // 'jedi'
var father = luke.father; // 'anakin'
```

```js
let luke = { occupation: "jedi", father: "anakin" };
let { occupation, father } = luke;

console.log(occupation); // 'jedi'
console.log(father); // 'anakin'
```

## Modules

ES6 之前，浏览器端的模块化代码，我们使用像[Browserify](http://browserify.org/)这样的库，
在 **Node.js** 中，我们则使用 [require](https://nodejs.org/api/modules.html#modules_module_require_id)。
在 ES6 中，我们现在可以直接使用 AMD 和 CommonJS 这些模块了。

### Exporting in CommonJS

```js
module.exports = 1;
module.exports = { foo: "bar" };
module.exports = ["foo", "bar"];
module.exports = function bar() {};
```

### Exporting in ES6

在 ES6 中，提供了多种设置模块出口的方式，比如我们要导出一个变量，那么使用 **变量名** ：

```js
export let name = 'David';
export let age  = 25;​​
```

还可以为对象 **导出一个列表**：

```js
function sumTwo(a, b) {
  return a + b;
}

function sumThree(a, b, c) {
  return a + b + c;
}

export { sumTwo, sumThree };
```

我们也可以使用简单的一个 `export` 关键字来导出一个结果值：

```js
export function sumTwo(a, b) {
  return a + b;
}

export function sumThree(a, b, c) {
  return a + b + c;
}
```

最后，我们可以 **导出一个默认出口**：

```js
function sumTwo(a, b) {
  return a + b;
}

function sumThree(a, b, c) {
  return a + b + c;
}

let api = {
  sumTwo,
  sumThree
};

export default api;

/*
 * 与以下的语句是对等的:
 * export { api as default };
 */
```

> **最佳实践**：总是在模块的 **最后** 使用 `export default` 方法。
> 它让模块的出口更清晰明了，节省了阅读整个模块来寻找出口的时间。
> 更多的是，在大量 CommonJS 模块中，通用的习惯是设置一个出口值或者出口对象。
> 坚持这个规则，可以让我们的代码更易读，且更方便的联合使用 CommonJS 和 ES6 模块。

### Importing in ES6

ES6 提供了好几种模块的导入方式。我们可以单独引入一个文件：

```js
import "underscore";
```

> 这里需要注意的是， **整个文件的引入方式会执行该文件内的最上层代码**。

就像 Python 一样，我们还可以命名引用：

```js
import { sumTwo, sumThree } from "math/addition";
```

我们甚至可以使用 `as` 给这些模块重命名：

```js
import {
  sumTwo as addTwoNumbers,
  sumThree as sumThreeNumbers
} from "math/addition";
```

另外，我们能 **引入所有的东西（原文：import all the things）** （也称为命名空间引入）

```js
import * as util from "math/addition";
```

最后，我们能可以从一个模块的众多值中引入一个列表：

```js
import * as additionUtil from "math/addtion";
const { sumTwo, sumThree } = additionUtil;
```

像这样引用默认对象：

```js
import api from "math/addition";
// Same as: import { default as api } from 'math/addition';
```

我们建议一个模块导出的值应该越简洁越好，不过有时候有必要的话命名引用和默认引用可以混着用。如果一个模块是这样导出的：

```js
// foos.js
export { foo as default, foo1, foo2 };
```

那我们可以如此导入这个模块的值：

```javaqscript
import foo, { foo1, foo2 } from 'foos';
```

我们还可以导入 commonjs 模块，例如 React：

```js
import React from "react";
const { Component, PropTypes } = React;
```

更简化版本：

```js
import React, { Component, PropTypes } from "react";
```

> **注意**：被导出的值是被 **绑定的（原文：bingdings）**，而不是引用。
> 所以，改变一个模块中的值的话，会影响其他引用本模块的代码，一定要避免此种改动发生。

## Parameters

在 ES5 中，许多种方法来处理函数的 **参数默认值（default values）**，**参数数量（indefinite arguments）**，**参数命名（named parameters）**。
ES6 中，我们可以使用非常简洁的语法来处理上面提到的集中情况。

### Default Parameters

```js
function addTwoNumbers(x, y) {
  x = x || 0;
  y = y || 0;
  return x + y;
}
```

ES6 中，我们可以简单为函数参数启用默认值：

```js
function addTwoNumbers(x = 0, y = 0) {
  return x + y;
}
```

```js
addTwoNumbers(2, 4); // 6
addTwoNumbers(2); // 2
addTwoNumbers(); // 0
```

### Rest Parameters

ES5 中，遇到参数数量不确定时，我们只能如此处理：

```js
function logArguments() {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
```

使用 **rest** 操作符，我们可以给函数传入一个不确定数量的参数列表：

```js
function logArguments(...args) {
  for (let arg of args) {
    console.log(arg);
  }
}
```

### Named Parameters

命名函数
ES5 中，当我们要处理多个 **命名参数** 时，通常会传入一个 **选项对象** 的方式，这种方式被 jQuery 采用。

```js
function initializeCanvas(options) {
  var height = options.height || 600;
  var width = options.width || 400;
  var lineStroke = options.lineStroke || "black";
}
```

我们可以利用上面提到的新特性 **解构** ，来完成与上面同样功能的函数：
We can achieve the same functionality using destructuring as a formal parameter
to a function:

```js
function initializeCanvas({ height = 600, width = 400, lineStroke = "black" }) {
  // ...
}
// Use variables height, width, lineStroke here
```

如果我们需要把这个参数变为可选的，那么只要把该参数解构为一个空对象就好了：

```js
function initializeCanvas({
  height = 600,
  width = 400,
  lineStroke = "black"
} = {}) {
  // ...
}
```

### Spread Operator

我们可以利用展开操作符（Spread Operator）来把一组数组的值，当作参数传入：

```js
Math.max(...[-1, 100, 9001, -32]); // 9001
```

## Classes

在 ES6 以前，我们实现一个类的功能的话，需要首先创建一个构造函数，然后扩展这个函数的原型方法，就像这样：

```js
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

Person.prototype.incrementAge = function() {
  return (this.age += 1);
};
```

继承父类的子类需要这样：

```js
function Personal(name, age, gender, occupation, hobby) {
    Person.call(this, name, age, gender);
    this.occupation = occupation;
    this.hobby = hobby;
}

Personal.prototype = Object.create(Person.prototype);
Personal.prototype.constructor = Personal;
Personal.prototype.incrementAge = function () {
    return Person.prototype.incrementAge.call(this) += 20;
};
```

ES6 提供了一些语法糖来实现上面的功能，我们可以直接创建一个类：

```js
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  incrementAge() {
    this.age += 1;
  }
}
```

继承父类的子类只要简单的使用 `extends` 关键字就可以了：

```js
class Personal extends Person {
  constructor(name, age, gender, occupation, hobby) {
    super(name, age, gender);
    this.occupation = occupation;
    this.hobby = hobby;
  }

  incrementAge() {
    super.incrementAge();
    this.age += 20;
    console.log(this.age);
  }
}
```

> **最佳实践**：ES6 新的类语法把我们从晦涩难懂的实现和原型操作中解救出来，这是个非常适合初学者的功能，而且能让我们写出更干净整洁的代码。

## Symbols

Symbols 在 ES6 版本之前就已经存在了，但现在我们拥有一个公共的接口来直接使用它们。
Symbols 是不可更改的（immutable）并且唯一的（unique），它可用作任何 hash 数据类型中的键。

### Symbol( )

调用 `Symbol()` 或者 `Symbol(描述文本)` 会创建一个唯一的、在全局中不可以访问的 Symbol 对象。
一个 `Symbol()` 的应用场景是：在自己的项目中使用第三方代码库，且你需要给他们的对象或者命名空间打补丁代码，又不想改动或升级第三方原有代码的时候。
例如，如果你想给 `React.Component` 这个类添加一个 `refreshComponent` 方法，但又确定不了这个方法会不会在下个版本中加入，你可以这么做：

```js
const refreshComponent = Symbol();

React.Component.prototype[refreshComponent] = () => {
  // do something
};
```

### Symbol.for(key)

使用 `Symbol.for(key)` 也是会创建一个不可改变的 Symbol 对象，但区别于上面的创建方法，这个对象是在全局中可以被访问到的。
两次相同的 `Symbol.for(key)` 调用会返回相同的 Symbol 实例。

**提示**：这并不同于 `Symbol(description)`。

```js
Symbol("foo") === Symbol("foo"); // false
Symbol.for("foo") === Symbol("foo"); // false
Symbol.for("foo") === Symbol.for("foo"); // true
```

Symbols 常用的一个使用场景，尤其是使用 `Symbol.for(key)` 方法，是用于实现代码间的互操作。
在你的代码中，通过在包含一些已知接口的第三方库的对象参数中查找 Symbol 成员，你可以实现这种互操作。
例如：

```js
function reader(obj) {
  const specialRead = Symbol.for("specialRead");
  if (obj[specialRead]) {
    const reader = obj[specialRead]();
    // do something with reader
  } else {
    throw new TypeError("object cannot be read");
  }
}
```

之后在另一个库中：

```js
const specialRead = Symbol.for("specialRead");

class SomeReadableType {
  [specialRead]() {
    const reader = createSomeReaderFrom(this);
    return reader;
  }
}
```

> **注意**：关于 Symbol 互操作的使用，一个值得一提的例子是`Symbol.iterable` 。`Symbol.iterable`存在 ES6 的所有可枚举对象中：数组（Arrays）、
> 字符串（strings）、生成器（Generators）等等。当它作为一个方法被调用时，它将会返回一个带有枚举接口的对象。

## Maps

**Maps** 是一个 JavaScript 中很重要（迫切需要）的数据结构。
在 ES6 之前，我们创建一个 **hash** 通常是使用一个对象：

```js
var map = new Object();
map[key1] = "value1";
map[key2] = "value2";
```

但是，这样的代码无法避免函数被特别的属性名覆盖的意外情况：

```js
> getOwnProperty({ hasOwnProperty: 'Hah, overwritten'}, 'Pwned');
> TypeError: Property 'hasOwnProperty' is not a function
```

**Maps** 让我们使用 `set`，`get` 和 `search` 操作数据。

```js
let map = new Map();
> map.set('name', 'david');
> map.get('name'); // david
> map.has('name'); // true
```

Maps 最强大的地方在于我们不必只能使用字符串来做 key 了，现在可以使用任何类型来当作 key，而且 key 不会被强制类型转换为字符串。

```js
let map = new Map([
  ["name", "david"],
  [true, "false"],
  [1, "one"],
  [{}, "object"],
  [function() {}, "function"]
]);

for (let key of map.keys()) {
  console.log(typeof key);
  // > string, boolean, number, object, function
}
```

> **提示**：当使用 `map.get()` 判断值是否相等时，非基础类型比如一个函数或者对象，将不会正常工作。
> 有鉴于此，还是建议使用字符串，布尔和数字类型的数据类型。

我们还可以使用 `.entries()` 方法来遍历整个 map 对象：

```js
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
```

## WeakMaps

在 ES5 之前的版本，我们为了存储私有数据，有好几种方法。像使用这种下划线命名约定：

```js
class Person {
  constructor(age) {
    this._age = age;
  }

  _incrementAge() {
    this._age += 1;
  }
}
```

在一个开源项目中，命名规则很难维持得一直很好，这样经常会造成一些困扰。
此时，我们可以选择使用 WeakMaps 来替代 Maps 来存储我们的数据：

```js
let _age = new WeakMap();
class Person {
  constructor(age) {
    _age.set(this, age);
  }

  incrementAge() {
    let age = _age.get(this) + 1;
    _age.set(this, age);
    if (age > 50) {
      console.log("Midlife crisis");
    }
  }
}
```

使用 WeakMaps 来保存我们私有数据的理由之一是不会暴露出属性名，就像下面的例子中的 `Reflect.ownKeys()`：

```js
> const person = new Person(50);
> person.incrementAge(); // 'Midlife crisis'
> Reflect.ownKeys(person); // []
```

一个使用 WeakMaps 存储数据更实际的例子，是存储与 DOM 元素相关联的数据，而这不会对 DOM 元素本身产生污染：

```js
let map = new WeakMap();
let el = document.getElementById("someElement");

// Store a weak reference to the element with a key
map.set(el, "reference");

// Access the value of the element
let value = map.get(el); // 'reference'

// Remove the reference
el.parentNode.removeChild(el);
el = null;

value = map.get(el); // undefined
```

上面的例子中，一旦对象被垃圾回收器给销毁了，WeakMaps 会自动的把这个对象所对应的键值对数据同时销毁。

> **提示**：结合这个例子，再考虑下 jQuery 是如何实现缓存带有引用的 DOM 元素这个功能的。使用 WeakMaps 的话，当被缓存的 DOM 元素被移除的时，jQuery 可以自动释放相应元素的内存。
> 通常情况下，在涉及 DOM 元素存储和缓存的情况下，使用 WeakMaps 是非常有效的。

## Promises

Promises 让我们把多缩进难看的代码（回调地狱）：

```js
func1(function(value1) {
  func2(value1, function(value2) {
    func3(value2, function(value3) {
      func4(value3, function(value4) {
        func5(value4, function(value5) {
          // Do something with value 5
        });
      });
    });
  });
});
```

写成这样：

```js
func1(value1)
  .then(func2)
  .then(func3)
  .then(func4)
  .then(func5, value5 => {
    // Do something with value 5
  });
```

在 ES6 之前，我们使用[bluebird](https://github.com/petkaantonov/bluebird) 或者
[Q](https://github.com/kriskowal/q)。现在我们有了原生版本的 Promises：

```js
new Promise((resolve, reject) =>
  reject(new Error("Failed to fulfill Promise"))
).catch(reason => console.log(reason));
```

这里有两个处理函数，**resolve**（当 Promise 执行成功完毕时调用的回调函数） 和 **reject** （当 Promise 执行不接受时调用的回调函数）

> **Promises 的好处**：大量嵌套错误处理回调函数会使代码变得难以阅读理解。
> 使用 Promises，我们可以通过清晰的路径将错误事件让上传递，并且适当地处理它们。
> 此外，Promise 处理后的值，无论是解决（resolved）还是拒绝（rejected）的结果值，都是不可改变的。

下面是一些使用 Promises 的实际例子：

```js
var request = require("request");

return new Promise((resolve, reject) => {
  request.get(url, (error, response, body) => {
    if (body) {
      resolve(JSON.parse(body));
    } else {
      resolve({});
    }
  });
});
```

我们还可以使用 `Promise.all()` 来 **并行化** 的处理一组异步的操作。

```js
let urls = [
  "/api/commits",
  "/api/issues/opened",
  "/api/issues/assigned",
  "/api/issues/completed",
  "/api/issues/comments",
  "/api/pullrequests"
];

let promises = urls.map(url => {
  return new Promise((resolve, reject) => {
    $.ajax({ url: url }).done(data => {
      resolve(data);
    });
  });
});

Promise.all(promises).then(results => {
  // Do something with results of all our promises
});
```

## Generators

就像[Promises](https://github.com/DrkSephy/es6-cheatsheet#promises)如何让我们避免[回调地狱](http://callbackhell.com/)一样，Generators 也可以使我们的代码扁平化，同时给予我们开发者像开发同步代码一样的感觉来写异步代码。Generators 本质上是一种支持的函数，随后返回表达式的值。
Generators 实际上是支持[暂停运行](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield)，随后根据上一步的返回值再继续运行的一种函数。

下面代码是一个使用 generators 函数的简单例子：

```js
function* sillyGenerator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

var generator = sillyGenerator();
> console.log(generator.next()); // { value: 1, done: false }
> console.log(generator.next()); // { value: 2, done: false }
> console.log(generator.next()); // { value: 3, done: false }
> console.log(generator.next()); // { value: 4, done: false }
```

就像上面的例子，当[next](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/next)运行时，它会把我们的 generator 向前“推动”，同时执行新的表达式。
我们能利用 Generators 来像书写同步代码一样书写异步代码。

```js
// Hiding asynchronousity with Generators

function request(url) {
  getJSON(url, function(response) {
    generator.next(response);
  });
}
```

这里我们写个 generator 函数将要返回我们的数据：

```js
function* getData() {
  var entry1 = yield request("http://some_api/item1");
  var data1 = JSON.parse(entry1);
  var entry2 = yield request("http://some_api/item2");
  var data2 = JSON.parse(entry2);
}
```

借助于 `yield`，我们可以保证 `entry1` 确实拿到数据并转换后再赋值给 `data1`。

当我们使用 generators 来像书写同步代码一样书写我们的异步代码逻辑时，没有一种清晰简单的方式来处理期间可能会产生的错误或者异常。在这种情况下，我们可以在我们的 generator 中引入 Promises 来处理，就像下面这样：

```js
function request(url) {
  return new Promise((resolve, reject) => {
    getJSON(url, resolve);
  });
}
```

我们再写一个函数，其中使用 `next` 来步进我们的 generator 的同事，再利用我们上面的 `request` 方法来产生（yield）一个 Promise。

```js
function iterateGenerator(gen) {
  var generator = gen();
  var ret;
  (function iterate(val) {
    ret = generator.next();
    if (!ret.done) {
      ret.value.then(iterate);
    }
  })();
}
```

在 Generator 中引入了 Promises 后，我们就可以通过 Promise 的 `.catch` 和 `reject` 来捕捉和处理错误了。
使用了我们新版的 Generator 后，新版的调用就像老版本一样简单可读（译者注：有微调）：

```js
iterateGenerator(function* getData() {
  var entry1 = yield request("http://some_api/item1");
  var data1 = JSON.parse(entry1);
  var entry2 = yield request("http://some_api/item2");
  var data2 = JSON.parse(entry2);
});
```

在使用 Generator 后，我们可以重用我们的老版本代码实现，以此展示了 Generator 的力量。
当使用 Generators 和 Promises 后，我们可以像书写同步代码一样书写异步代码的同时优雅地解决了错误处理问题。
此后，我们实际上可以开始利用更简单的一种方式了，它就是[async-await](https://github.com/DrkSephy/es6-cheatsheet#async-await)。

## Async Await

`async await` 随着 ES2016 版本就要发布了，它给我们提供了一种更轻松的、更简单的可以替代的实现上面 Generators 配合 Promises 组合代码的一种编码方式，让我们来看看例子：

```js
var request = require("request");

function getJSON(url) {
  return new Promise(function(resolve, reject) {
    request(url, function(error, response, body) {
      resolve(body);
    });
  });
}

async function main() {
  var data = await getJSON();
  console.log(data); // NOT undefined!
}

main();
```
