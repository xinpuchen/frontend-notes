# Koa 中间件原理

`app.use`加载用于处理 http 请求的 middleware（中间件），当一个请求来的时候，会依次被这些 middleware 处理。

原理：内部维护一个函数数组，这个函数数组表示在发出响应之前要执行的所有函数，也就是中间件数组

## 原理实现

```js
class Koa {
  constructor() {
    this.middleWares = [];
  }
  use(fn) {
    this.middleWares.push(fn);
  }
  compose() {
    const dispatch = index => {
      if (index === this.middleWares.length) return Promise.resolve();
      const route = this.middleWares[index];
      return Promise.resolve(route(() => dispatch(index + 1)));
    };
    dispatch(0);
  }
}
```

## 使用场景

```js
const app = new Koa();

function fn() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(123);
      console.log('hello');
    }, 1000);
  });
}

app.use(async next => {
  console.log(1);
  await next();
  console.log(2);
});

app.use(async next => {
  console.log(3);
  await fn();
  await next();
  console.log(4);
});

app.use(async next => {
  console.log(5);
  await next();
  console.log(6);
});

app.compose();
```
