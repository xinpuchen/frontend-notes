# 中间件

`app.use`加载用于处理 http 请求的 middleware（中间件），当一个请求来的时候，会依次被这些 middleware 处理。

**原理：**express 内部维护一个函数数组，这个函数数组表示在发出响应之前要执行的所有函数，也就是中间件数组

## 使用场景

```js
const express = require('express');
const middlewareA = require('middlewareA.js');

const app = express();

app.use(middlewareA);

app.listen(3000, () => {
  console.log('app is listening...');
});
```

## 中间件实例

```js
// middlewareA.js

module.exports = function(req, res, next) {
  console.log('Middleware running...');
  // do something

  next();
};
```
