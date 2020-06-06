## Object.defineProperty 详解

### 语法

```js
Object.defineProperty(object, propertyName, descriptor);
```

### 参数

- object 必需。 要在其上添加或修改属性的对象。 这可以是一个本机 JavaScript 对象（即用户定义的对象或内置对象）或 DOM 对象。
- propertyName 必需。 一个包含属性名称的字符串。
- descriptor 可选。 属性描述符。 它可以针对数据属性或访问器属性。

其中 descriptor 的参数值得我们关注下,该属性可设置的值有：

- value: 属性的值，默认为 undefined。
- writable: 该属性是否可写，如果设置成 false，则任何对该属性改写的操作都无效（但不会报错），对于直接在对象上定义的属性，默认值为 true。

> 注:不能同时设置 value 和 writable,这两对属性是互斥的

```js
var person = {};
Object.defineProperty(person, 'name', {
  value: 'Taylor', //由于设定了writable属性为false 导致这个量不可以修改
  writable: false,
});
console.log(person.name); // 输出 Taylor
person.name = 'Taylor swift';
console.log(person.name); // 输出 Taylor
```

- configurable: 如果为 false，则任何尝试删除目标属性或修改属性以下特性（writable, configurable, enumerable）的行为将被无效化，对于直接在对象上定义的属性，默认值为 true。

```js
var person = {};
Object.defineProperty(person, 'name', {
  value: 'Taylor',
  configurable: false,
});
delete person.name;
console.log(person.name); // 输出 Taylor
person.name = 'Taylor swift';
console.log(person.name); // 输出 Taylor
```

- enumerable: 是否能在 for-in 循环中遍历出来或在 Object.keys 中列举出来。对于直接在对象上定义的属性，默认值为 true。

️⚠️ 注意: 在调用 Object.defineProperty()方法时，如果不指定，configurable，enumerable，writable 特性的默认值都是 false，这跟之前所说的**对于直接在对象上定义的属性，默认值为 true。**并不冲突。

```js
//直接在对象上定义的属性，这些特性默认值为 true
var person = {};
person.name = 'Taylor';
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
//输出 Object {value: "Taylor", writable: true, enumerable: true, configurable: true}

//通过 Object.defineProperty 在对象上定义的属性，这些特性默认值为 false
var otherPerson = {};
Object.defineProperty(otherPerson, 'name', {
  value: 'Taylor',
});
console.log(Object.getOwnPropertyDescriptor(otherPerson, 'name'));
//输出 Object {value: "Taylor", writable: false, enumerable: false, configurable: false}
```

- get: 一旦目标对象访问该属性，就会调用这个方法，并返回结果。默认为 undefined。
- set: 一旦目标对象设置该属性，就会调用这个方法。默认为 undefined。

从上面，可以得知，我们可以通过使用 Object.defineProperty，来定义和控制一些特殊的属性，如属性是否可读，属性是否可枚举，甚至修改属性的修改器（setter）和获取器(getter)

### 实际运用

#### MVVM 模式中数据‘双向绑定’实现

#### 优化对象获取和修改属性方式

例如，过去我们在设置 dom 节点 transform 时是这样的：

```js
//加入有一个目标节点， 我们想设置其位移时是这样的
var targetDom = document.getElementById('target');
var transformText = 'translateX(' + 10 + 'px)';
targetDom.style.webkitTransform = transformText;
targetDom.style.transform = transformText;
```

如果通过 Object.defineProperty， 我们则可以：

```js
//这里只是简单设置下translateX的属性，其他如scale等属性可自己去尝试
Object.defineProperty(dom, 'translateX', {
set: function(value) {
         var transformText = 'translateX(' + value + 'px)';
        dom.style.webkitTransform = transformText;
        dom.style.transform = transformText;
}
//这样再后面调用的时候, 十分简单
dom.translateX = 10;
dom.translateX = -10;
//甚至可以拓展设置如scale, originX, translateZ,等各个属性，达到下面的效果
dom.scale = 1.5;  //放大1.5倍
dom.originX = 5;  //设置中心点X
}
```

#### 增加全局属性获取和修改时的信息

如在 Express4.0 中，该版本去除了一些旧版本的中间件，为了让用户能够更好地发现，其有下面这段代码，通过修改 get 属性方法，让用户调用废弃属性时抛错并带上自定义的错误信息。

```js
[
  'json',
  'urlencoded',
  'bodyParser',
  'compress',
  'cookieSession',
  'session',
  'logger',
  'cookieParser',
  'favicon',
  'responseTime',
  'errorHandler',
  'timeout',
  'methodOverride',
  'vhost',
  'directory',
  'limit',
  'multipart',
  'staticCache',
].forEach(function(name) {
  Object.defineProperty(exports, name, {
    get: function() {
      throw new Error(
        `Most middleware (like ${name}) is no longer bundled with Express and must be installed separately.`,
      );
    },
    configurable: true,
  });
});
```

#### 拦截数组变化的情况

```js
let a = {};
bValue = 1;
Object.defineProperty(a, 'b', {
  set: function(value) {
    bValue = value;
    console.log('setted');
  },
  get: function() {
    return bValue;
  },
});
a.b; //1
a.b = []; //setted
a.b = [1, 2, 3]; //setted
a.b[1] = 10; //无输出
a.b.push(4); //无输出
a.b.length = 5; //无输出
a.b; //[1,10,3,4,undefined];
```

结论：`defineProperty` 无法检测数组索引赋值,改变数组长度的变化，但是通过数组方法来操作可以检测到

#### 多级对象监听

```js
let info = {};
function observe(obj) {
  if (!obj || typeof obj !== 'object') {
    return;
  }
  for (var i in obj) {
    definePro(obj, i, obj[i]);
  }
}

function definePro(obj, key, value) {
  observe(value);
  Object.defineProperty(obj, key, {
    get: function() {
      return value;
    },
    set: function(newval) {
      console.log('检测变化', newval);
      value = newval;
    },
  });
}
definePro(info, 'friends', { name: '张三' });
info.friends.name = '李四';
```
