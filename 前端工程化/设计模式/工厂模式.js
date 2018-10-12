/**
 * 工厂起到的作用就是隐藏了创建实例的复杂度，只需要提供一个接口，简单清晰。
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
