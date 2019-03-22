# JavaScript 整理

在JavaScript的模块中,首先我们可以把语言按照文法、语义和运行时来拆分,这符合编程语言的一般规律: **用一定的词法和语句,表达一定语句,从而操作运行时**。

![index](JavaScript.png)

## 语义

## 文法

### 词法

### 语法

## 运行时

按照程序的一般规律,把运行时分为数据结构和算法部分: 数据结构包含类型和实例(JavaScript的类型系统就是它的7种基本类型和7种语言类型,实例就是它的内置对象部分)。所谓算法就是JavaScript的执行过程。

### [数据结构](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

#### 类型

> JavaScript的7种语言类型,包括6种原始数据类型和Object

1. [Undefined](https://developer.mozilla.org/en-US/docs/Glossary/Undefined)
   - **含义:** 尚未赋值的变量的值[`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
   - **取值:** `undefined` (也可以通过`void 0`得到)
2. [Null](https://developer.mozilla.org/en-US/docs/Glossary/Null)
   - **含义:** 表示变量值为[`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
   - **取值:** `null`
3. [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)
   - **含义:** [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)表示逻辑意义上的真或假
   - **取值:** `true`, `false`
4. [String](https://developer.mozilla.org/en-US/docs/Glossary/String)
   - **含义:** [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)表示文本数据 (采用UTF16编码, 处理非BMP的字符符需要格外小心)
   - **取值:** 最大长度为`2^53-1`
   - **Note:** 现行的字符集国际标准,字符是以 Unicode 的方式表示的,每一个 Unicode 的码点表示一个字符,理论上,Unicode 的范围是无限的。UTF 是 Unicode 的编码方式,规定了码点在计算机中的表示方法,常见的有 UTF16 和 UTF8。 Unicode 的码点通常用 U+??? 来表示,其中 ??? 是十六进制的码点值。 0-65536(U+0000 - U+FFFF)的码点被称为基本字符区域(BMP)。
5. [Number](https://developer.mozilla.org/en-US/docs/Glossary/Number)
   - **含义:** [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)表示数字 ([Number是双精度64位浮点格式(IEEE 754)](https://en.wikipedia.org/wiki/Double-precision_floating-point_format)中的数字数据类型)
   - **取值:** 取值范围 [-(2^53 -1) , 2^53 -1]
6. [Symbol](https://developer.mozilla.org/en-US/docs/Glossary/Symbol) (new in ECMAScript 6)
   - **含义:** [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)是一个唯一的不可变的原始值
   - **取值:** 使用全局的`Symbol`函数创建 (不可以使用new创建Symbol对象, Symbol值不能进行运算)
7. [Object](https://developer.mozilla.org/en-US/docs/Glossary/Object)
   - **含义:** [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)可以看做属性的集合
   - Object属性主要分成两类 (通常用于定义属性的代码会产生数据属性,其中的 `writable`、`enumerable`、`configurable` 都默认为 `true`。

> JavaScript的7种规范类型

1. List 和 Record: 用于描述函数传参过程。
2. Set: 主要用于解释字符集等。
3. Completion Record: 用于描述异常、跳出等语句执行过程。
4. Reference: 用于描述对象属性访问、delete 等。
5. Property Descriptor: 用于描述对象的属性。
6. Lexical Environment 和 Environment Record: 用于描述变量和作用域。
7. Data Block: 用于描述二进制数据。

##### [Object 对象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Objects)

> JavaScript对象是键和值之间的映射。

###### [Properties 属性](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Properties)

> 使用[对象文字语法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Object_literals),初始化一组有限的属性;然后可以添加和删除属性。
> 属性值可以是任何类型的值,包括其他对象,这使得能够构建复杂的数据结构。使用键值标识属性。键值是`String`或`Symbol`值。
> Object属性主要分成两类: `数据属性`和`访问器属性`。

- 数据属性: 大多数时候我们只关心数据属性的值
  - value: 就是属性的值
  - writable: 决定属性能否被赋值
  - enumerable: 决定 for in 能否枚举该属性
  - configurable: 决定该属性能否被删除或者改变特征值
- 访问器属性: 每次访问属性,都会执行getter或者setter函数
  - getter: 函数或 undefined,在取属性值时被调用
  - setter: 函数或 undefined,在设置属性值时被调用
  - enumerable: 决定 for in 能否枚举该属性
  - configurable: 决定该属性能否被删除或者改变特征值

> 我们可以使用内置函数 [Object.getOwnPropertyDescriptor(obj, prop)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) 来查看;也可以使用[Object.defineProperty(obj, prop, descriptor)
](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)来定义属性。

#### 实例

> JavaScript的实例对象主要分成宿主对象和内置对象两个部分

- 宿主对象(host Objects): 由 JavaScript 宿主环境提供的对象,它们的行为完全由宿主环境决定。(宿主对象也分为固有的和用户可创建的两种,比如 document.createElement 就可以创建一些 dom 对象。)
- 内置对象(Built-in Objects): 由 JavaScript 语言提供的对象。
  - [固有对象(Intrinsic Objects)](https://tc39.github.io/ecma262/#sec-well-known-intrinsic-objects): 由标准规定,随着 JavaScript 运行时创建而自动创建的对象实例。
  - 原生对象(Native Objects): 可以由用户通过 Array、RegExp 等内置构造器或者特殊语法创建的对象。

  | 基本类型 | 基础功能和数据结构 | 错误类型       | 二进制操作        | 带类型的数组       |
  | -------- | ------------------ | -------------- | ----------------- | ------------------ |
  | Boolean  | Array              | Error          | ArrayBuffer       | Float32Array       |
  | String   | Date               | EvalError      | SharedArrayBuffer | Float64Array       |
  | Number   | RegExp             | RangeError     | DataView          | Int8Array          |
  | Symbol   | Promise            | ReferenceError |                   | Int16Array         |
  | Object   | Proxy              | SyntaxError    |                   | Int32Array         |
  |          | Map                | TypeError      |                   | UInt8Array         |
  |          | WeakMap            | URIError       |                   | UInt16Array        |
  |          | Set                |                |                   | UInt32Array        |
  |          | WeakSet            |                |                   | UInt8ClampendArray |
  |          | Function           |                |                   |                    |

  - 普通对象(Ordinary Objects): 由{}语法、Object 构造器或者 class 关键字定义类创建的对象,它能够被原型继承。

##### 应用和机制

### 执行过程(算法)

#### 事件循环

#### 微任务的执行

#### 函数的执行

#### 语句级的执行