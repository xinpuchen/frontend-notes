const _ = require("./underscore");

// Objects

/**
 * keys / allKeys
 * keys()可以非常方便地返回一个object自身所有的key，但不包含从原型链继承下来的
 * allKeys()除了object自身的key，还包含从原型链继承下来的
 */
function Student(name, age) {
  this.name = name;
  this.age = age;
}
Student.prototype.school = "No.1 Middle School";
let xiaoming = new Student("小明", 20);
console.log(_.keys(xiaoming));
console.log(_.allKeys(xiaoming));

/**
 * values
 * 和keys()类似，values()返回object自身但不包含原型链继承的所有值
 */
const obj1 = {
  name: "小明",
  age: 20
};

console.log(_.values(obj1));

/**
 * mapObject
 * mapObject()就是针对object的map版本
 */
const obj2 = { a: 1, b: 2, c: 3 };
// 注意传入的函数签名，value在前，key在后:
console.log(_.mapObject(obj2, (value, key) => 100 + value));

/**
 * invert
 * invert()把object的每个key-value来个交换，key变成value，value变成key
 */
const obj3 = {
  Adam: 90,
  Lisa: 85,
  Bart: 59
};
console.log(_.invert(obj3));

/**
 * extend / extendOwn
 * extend()把多个object的key-value合并到第一个object并返回
 * extendOwn()和extend()类似，但获取属性时忽略从原型链继承下来的属性
 */
const obj4 = { name: "Bob", age: 20 };
_.extend(obj4, { age: 15 }, { age: 88, city: "Beijing" });
console.log(obj4);

/**
 * clone
 * 如果我们要复制一个object对象，就可以用clone()方法，它会把原有对象的所有属性都复制到新的对象中
 */
const source = {
  name: "小明",
  age: 20,
  skills: ["JavaScript", "CSS", "HTML"]
};
const copied = _.clone(source);
console.log(copied);
// 注意，clone()是“浅复制”。所谓“浅复制”就是说，两个对象相同的key所引用的value其实是同一对象
// 也就是说，修改source.skills会影响copied.skills
console.log(source.skills === copied.skills);

/**
 * isEqual
 * isEqual()对两个object进行深度比较，如果内容完全相同，则返回true
 */
const o1 = { name: "Bob", skills: { Java: 90, JavaScript: 99 } };
const o2 = { name: "Bob", skills: { JavaScript: 99, Java: 90 } };

console.log(o1 === o2); // false
console.log(_.isEqual(o1, o2)); // true
