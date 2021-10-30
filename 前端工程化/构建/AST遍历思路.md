# AST 遍历思路

前端领域的编译工具有挺多，它们都是基于 `AST`，而操作 `AST` 就需要遍历来查找。

`eslint、babel、estraverse、postcss、typescript、compiler` 这些编译工具的遍历 AST 的实现我们都过了一遍，虽然有的用递归、有的用循环，有的是面向对象、有的是函数，有的是抽离 visitorKeys、有的是写死在代码里，但思路都是一样的。

所以，我们来正式的下个结论：**编译工具的遍历实现思路只有一种，就是找到每种 AST 的可遍历的 keys，深度优先的遍历。**
