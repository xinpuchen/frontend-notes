# 从 ECMAScript 规范解读 this

## ECMAScript 分为语言类型和规范类型

- ECMAScript 语言类型是开发者直接使用 ECMAScript 可以操作的，其实就是我们常说的 Undefined, Null, Boolean, String, Number, 和 Object。
- 规范类型相当于 meta-values，是用来用算法描述 ECMAScript 语言结构和 ECMAScript 语言类型的。规范类型包括：Reference, List, Completion, Property Descriptor, Property Identifier, Lexical Environment, 和 Environment Record。

## Reference

Reference 由三部分构成，分别是：

- base value
- referenced name
- strict reference

base value 就是属性所在的对象或者就是 EnvironmentRecord, 它的值只可能是 undefined, an Object, an Boolean, an String, an Number, or an Environment record 其中的一种。

referenced name 就是属性的名称

```js
var foo = 1;

// 对应的Reference是：
var fooReference = {
  base: EnvironmentRecord,
  name: 'foo',
  strict: false,
};
```

```js
var foo = {
  bar: function() {
    return this;
  },
};

foo.bar(); // foo

// bar对应的Reference是：
var BarReference = {
  base: foo,
  propertyName: 'bar',
  strict: false,
};
```

而且规范中还提供了获取 Reference 组成部分的方法，比如 GetBase 和 IsPropertyReference。

- GetBase: 返回 reference 的 base value。
- IsPropertyReference: 简单的理解，如果 base value 是一个对象，就返回 true。

## GetValue

一个用于从 Reference 类型获取对应值的方法

```js
var foo = 1;

var fooReference = {
  base: EnvironmentRecord,
  name: 'foo',
  strict: false,
};

GetValue(fooReference); // 1;
```

GetValue 返回对象属性真正的值，但是要注意：

**调用 GetValue，返回的将是具体的值，而不再是一个 Reference**

> 这个很重要，这个很重要，这个很重要。

## 如何确定 this 的值

当函数调用的时候，如何确定 this 的取值：

1. 计算 MemberExpression 的结果赋值给 ref
2. 判断 ref 是不是一个 Reference 类型

   - 如果 ref 是 Reference，并且 IsPropertyReference(ref) 是 true, 那么 this 的值为 GetBase(ref)
   - 如果 ref 是 Reference，并且 base value 值是 Environment Record, 那么 this 的值为 ImplicitThisValue(ref)
   - 如果 ref 不是 Reference，那么 this 的值为 undefined

## 具体分析

### 计算 MemberExpression 的结果赋值给 ref

MemberExpression：

- PrimaryExpression // 原始表达式 可以参见《JavaScript 权威指南第四章》
- FunctionExpression // 函数定义表达式
- MemberExpression [ Expression ] // 属性访问表达式
- MemberExpression . IdentifierName // 属性访问表达式
- new MemberExpression Arguments // 对象创建表达式

> 举个例子：

```js
function foo() {
  console.log(this);
}

foo(); // MemberExpression 是 foo

function foo() {
  return function() {
    console.log(this);
  };
}

foo()(); // MemberExpression 是 foo()

var foo = {
  bar: function() {
    return this;
  },
};

foo.bar(); // MemberExpression 是 foo.bar
```

所以简单理解 MemberExpression 其实就是()左边的部分。

### 判断 ref 是不是一个 Reference 类型

关键就在于看规范是如何处理各种 MemberExpression，返回的结果是不是一个 Reference 类型

原文链接：[JavaScript 深入之从 ECMAScript 规范解读 this](https://github.com/mqyqingfeng/Blog/issues/7)
