/**
 * 装饰模式不需要改变已有的接口，作用是给对象添加功能。
 * 就像我们经常需要给手机戴个保护套防摔一样，不改变手机自身，给手机添加了保护套提供防摔功能。
 */

function readonly(target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Test {
  @readonly
  name = 'cxp';
}

let t = new Test();

t.yck = '111'; // 不可修改
