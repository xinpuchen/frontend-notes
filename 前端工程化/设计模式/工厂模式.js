/**
 * 工厂起到的作用就是隐藏了创建实例的复杂度，只需要提供一个接口，简单清晰。
 * 缺点：对象无法识别，因为所有的实例都指向一个原型
 */

class Man {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(this.name);
  }
}

class Factory {
  static create(name) {
    return new Man(name);
  }
}

Factory.create("cxp").getName();

function createPerson(name) {
  var p = new Object();
  p.name = name;
  p.getName = function() {
    console.log(this.name);
  };
  return p;
}

var person = createPerson("kevin");
person.getName();
console.log(person instanceof createPerson);
console.log(person instanceof Object);
