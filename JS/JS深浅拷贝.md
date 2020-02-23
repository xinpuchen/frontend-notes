# JS 深浅拷贝

## 乞丐版本

```js
const DeepClone = target => JSON.parse(JSON.stringify(target));
```

这种写法非常简单，而且可以应对大部分的应用场景，但是有很大缺陷，比如拷贝其他引用类型、拷贝函数、循环引用等情况。

## 基础版本

```js
const DeepClone = target => {
  if (typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {};
    for (const key in target) {
      cloneTarget[key] = DeepClone(target[key]);
    }
    return cloneTarget;
  } else {
    return target;
  }
};
```

这是一个最基础版本的深拷贝，利用递归解决问题，但是显然，还有非常多的缺陷，比如，还没有考虑数组。

## 考虑循环引用

```js
const DeepClone = (target, map = new Map()) => {
  if (typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {};
    if (map.has(target)) {
      return map.get(target);
    }
    map.set(target, cloneTarget);
    for (const key in target) {
      cloneTarget[key] = DeepClone(target[key], map);
    }
    return cloneTarget;
  } else {
    return target;
  }
};
```

解决循环引用问题，额外开辟一个存储空间，来存储当前对象和拷贝对象的对应关系，当需要拷贝当前对象时，先去存储空间中找，有没有拷贝过这个对象，如果有的话直接返回，如果没有的话继续拷贝，这样就巧妙化解的循环引用的问题。

## 性能优化

- 使用 WeakMap 替代 Map，使用 WeakMap 的话，target 和 cloneTarget 存在的就是弱引用关系，当下一次垃圾回收机制执行时，这块内存就会被释放掉
- 上面的方法中，遍历数组和对象都使用了 for in 这种方式，实际上 for in 在遍历时效率是非常低的，对比常见的三种循环 for、while、for in 的执行效率，得到 while > for > for in 的效率

先使用 while 来实现一个通用的 forEach 遍历，iteratee 是遍历的回掉函数，他可以接收每次遍历的 value 和 index 两个参数

```js
const forEach = (array, iteratee) => {
  let index = -1;
  const length = array.length;
  while (++index < length) {
    iteratee(array[index], index);
  }
  return array;
};
```

```js
const DeepClone = (target, map = new WeakMap()) => {
  if (typeof target === 'object') {
    const isArray = Array.isArray(target);
    let cloneTarget = isArray ? [] : {};
    if (map.has(target)) {
      return map.get(target);
    }
    map.set(target, cloneTarget);
    const keys = isArray ? undefined : Object.keys(target);
    forEach(keys || target, (value, key) => {
      if (keys) key = value;
      cloneTarget[key] = DeepClone(target[key], map);
    });
    return cloneTarget;
  } else {
    return target;
  }
};
```

## 其他数据类型

- 可继续遍历的类型：Map、Set、Array、Object、Arguments
- 不可遍历的类型：Boolean、Number、String、undefined、、Function、Symbol、Date、RegExp、Error

> 参考： [ConardLi DeepClone](https://github.com/ConardLi/ConardLi.github.io/blob/master/demo/deepClone/src/clone_6.js)
