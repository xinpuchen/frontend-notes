# JS 模块化规范

## 对象方法

将相关方法写成一个对象，防止污染全局作用域

缺点：私有成员变量可以直接被修改

```js
var module1 = new Object({
  _count: 1,
  getCount: function() {
    return this._count;
  },
  setCount: function(value) {
    this._count = value;
  },
});
```

## 自执行函数写法(闭包)

```js
var module2 = (function() {
  var count = 1;
  var getCount = function() {
    return count;
  };
  var setCount = function(value) {
    count = value;
  };
  return {
    getCount,
    setCount,
  };
})();
```

## Asynchronous Module Definition(AMD)

AMD 是 RequireJS 在推广过程中对模块定义的规范化产出

使用前需引入 require.js 依赖，里面主要包含了 define 函数的定义

```html
<!-- `data-main` 属性为主模块文件路径 -->
<script data-main="./main" src="./require.js"></script>
```

导入：

```js
// main.js
require(['./module1.js', './module2.js'], function(module1, module2) {
  console.log(module1);
  console.log(module2);
});
```

导出：

```js
// module3.js
define(['./module2'], function(module2) {
  return {
    module3: module2,
  };
});
```

## Common Module Definition(CMD)

CMD 是 SeaJS 在推广过程中对模块定义的规范化产出

使用前需引入 sea.js 依赖

```html
<script src="./sea.js"></script>
<script>
  // 在页面中加载主模块
  seajs.use('./main');
</script>
```

导入：

```js
// main.js
define(function(require, exports, module) {
  var module1 = require('./module1.js');
  console.log(module1);

  var module2 = require('./module2.js');
  console.log(module2);
});
```

导出：

```js
// module3.js
define(function(require, exports, module) {
  var module2 = require('./module2.js');
  module.exports = {
    module3: module2,
  };
});
```

## AMD 与 CMD

- AMD 推崇依赖前置，CMD 推崇依赖就近
- 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行

## CommonJS

AMD 和 CMD 都是用于浏览器端的模块规范，而在服务器端比如 node，采用的则是 CommonJS 规范

导出：

```js
// add.js
var add = function(x, y) {
  return x + y;
};
module.exports.add = add;
```

导入：

```js
var add = require('./add.js');
console.log(add.add(1, 1));
```

## AMD 与 CommonJS

- AMD 规范是非同步加载模块，允许指定回调函数
- CommonJS 规范加载模块是同步的，只有加载完成，才能执行后面的操作
- 浏览器环境，要从服务器端加载模块，这时就必须采用非同步模式，因此浏览器端一般采用 AMD 规范
- 由于 Node.js 主要用于服务器编程，模块文件一般都已经存在于本地硬盘，所以加载起来比较快，不用考虑非同步加载的方式，所以 CommonJS 规范比较适用

## ES6 Module

ECMAScript2015 规定了新的模块加载方案

导出：

```js
// add.js
var add = function(x, y) {
  return x + y;
};
export { add };
```

导入：

```js
import { add } from './add.js';
console.log(add(1, 1));
```

## ES6 Module 与 CommonJS

- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口
- CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用

## 前端工程化为模块的编译

### Babel

Babel 只是把 ES6 模块语法转为 CommonJS 模块语法，然而浏览器是不支持这种模块语法的，所以直接跑在浏览器会报错的，如果想要在浏览器中运行，还是需要使用打包工具将代码打包

```js
// ES6
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export { firstName, lastName, year };
```

Babel 编译后:

```js
// ES5
'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true,
});

var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

exports.firstName = firstName;
exports.lastName = lastName;
exports.year = year;
```

Babel 只是把 ES6 模块语法转为 CommonJS 模块语法，然而浏览器是不支持这种模块语法的，所以直接跑在浏览器会报错的，如果想要在浏览器中运行，还是需要使用打包工具将代码打包。

### Webpack

浏览器中不支持 CommonJS 语法,这是因为浏览器环境中并没有 module、 exports、 require 等环境变量。换句话说，webpack 打包后的文件之所以在浏览器中能运行，就是靠模拟了这些变量的行为。

```js
// 自执行函数
(function(modules) {
  // 用于储存已经加载过的模块
  var installedModules = {};
  // 加载函数
  function require(moduleName) {
    // 如果已加载则直接返回
    if (installedModules[moduleName]) {
      return installedModules[moduleName].exports;
    }
    var module = (installedModules[moduleName] = {
      exports: {},
    });
    modules[moduleName](module, module.exports, require);
    return module.exports;
  }
  // 加载主模块
  return require('main');
})({
  main: function(module, exports, require) {
    var addModule = require('./add');
    console.log(addModule.add(1, 1));

    var squareModule = require('./square');
    console.log(squareModule.square(3));
  },
  './add': function(module, exports, require) {
    console.log('加载了 add 模块');

    module.exports = {
      add: function(x, y) {
        return x + y;
      },
    };
  },
  './square': function(module, exports, require) {
    console.log('加载了 square 模块');

    var multiply = require('./multiply');
    module.exports = {
      square: function(num) {
        return multiply.multiply(num, num);
      },
    };
  },

  './multiply': function(module, exports, require) {
    console.log('加载了 multiply 模块');

    module.exports = {
      multiply: function(x, y) {
        return x * y;
      },
    };
  },
});
```
