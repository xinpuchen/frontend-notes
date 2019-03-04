/**
 * 适配器用来解决两个接口不兼容的情况，不需要改变已有的接口，通过包装一层的方式实现两个接口的正常协作。
 */
class Plug {
  getName() {
    return '插头';
  }
}

class Target {
  constructor() {
    this.plug = new Plug();
  }
  getName() {
    return `适配器转二脚${this.plug.getName()}`;
  }
}

let target = new Target();
console.log(target.getName());
