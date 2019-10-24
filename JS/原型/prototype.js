/**
 * link: https://github.com/mqyqingfeng/Blog/issues/2
 */
// function Person() {}
const Person = new Function();

Person.prototype.name = 'xinpu';

const person = new Person();

person.name = 'kevin';

console.log(person.name);

// prototype

const person2 = new Person();

console.log(person2.name);

// __proto__

const person3 = new Person();
console.log(person3.__proto__ === Person.prototype);

// constructor

console.log(Person.prototype.constructor === Person);

// 实例与原型

const person4 = new Person();
person4.name = 'Tom';
console.log(person4.name);

delete person4.name;
console.log(person4.name);

// 原型与原型

const obj = new Object();
obj.name = 'kobe';
console.log(obj.name);

// 原型链

console.log(Object.prototype.__proto__);
