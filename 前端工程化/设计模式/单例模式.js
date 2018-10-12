/**
 * 单例模式很常用，比如全局缓存、全局状态管理等等这些只需要一个对象，就可以使用单例模式。
 * 单例模式的核心是保证全局只有一个对象可以访问。
 */
class Singleton {
  constructor() {}
}

Singleton.getInstance = (function() {
  let instance;
  return function() {
    if (!instance) {
      instance = new Singleton();
    }
    return instance;
  };
})();

let s1 = Singleton.getInstance();
let s2 = Singleton.getInstance();
console.log(s1 === s2); // true
