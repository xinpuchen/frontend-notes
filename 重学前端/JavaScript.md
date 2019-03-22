# JavaScript 整理

在JavaScript的模块中，首先我们可以把语言按照文法、语义和运行时来拆分，这符合编程语言的一般规律: **用一定的词法和语句，表达一定语句，从而操作运行时**。

![index](JavaScript.png)

## 语义

## 文法

### 词法

### 语法

## 运行时

按照程序的一般规律，把运行时分为数据结构和算法部分: 数据结构包含类型和实例(JavaScript的类型系统就是它的7种基本类型和7种语言类型，实例就是它的内置对象部分)。所谓算法就是JavaScript的执行过程。

### 数据结构

#### 类型

> JavaScript的7种基本类型和7种语言类型

1. Undefined
2. Null
3. Boolean
4. String
5. Number
6. Symbol
7. Object

- List 和 Record: 用于描述函数传参过程。
- Set: 主要用于解释字符集等。
- Completion Record: 用于描述异常、跳出等语句执行过程。
- Reference: 用于描述对象属性访问、delete 等。
- Property Descriptor: 用于描述对象的属性。
- Lexical Environment 和 Environment Record: 用于描述变量和作用域。
- Data Block: 用于描述二进制数据。

##### 对象

#### 实例

> JavaScript的内置对象部分

##### 应用和机制

### 执行过程(算法)

#### 事件循环

#### 微任务的执行

#### 函数的执行

#### 语句级的执行