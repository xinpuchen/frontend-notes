/**
 * 递归方法实现深度克隆原理：
 * 遍历对象、数组直到里面都是基本数据类型，然后再去复制，就是深拷贝
 */

//  定义检测数据类型的功能函数
const checkedType = target =>
  Object.prototype.toString.call(target).slice(8, -1);

// 实现深度克隆
const clone = target => {
  // 初始化result变量为最终克隆的结果
  // 判断拷贝的数据类型
  let result,
    targetType = checkedType(target);
  if (targetType === 'Object') {
    result = {};
  } else if (targetType === 'Array') {
    result = [];
  } else {
    return result;
  }
  // 遍历目标数据
  for (let i in target) {
    // 获取遍历目标的每一项值
    let value = target[i];
    // 判断目标结构里的每一值是否存在对象或数组
    if (checkedType(value) === 'Object' || checkedType(value) === 'Array') {
      // 进一步遍历
      result[i] = clone(value);
    } else {
      result[i] = value;
    }
  }
  return result;
};
