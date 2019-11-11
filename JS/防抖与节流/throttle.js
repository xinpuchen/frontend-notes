/**
 * 节流：事件触发后每隔一段时间触发一次,可触发多次
 * https://github.com/mqyqingfeng/Blog/issues/26
 */

// 进入立即执行，停止触发后不会再执行
var throttle = function(action, delay) {
  var previous = 0;
  return function() {
    var now = +new Date();
    if (now - previous > delay) {
      action.apply(this, arguments);
      previous = now;
    }
  };
};

// 会在 n 秒后第一次执行，停止触发后依然会再执行一次事件
// const throttle = function(action, delay) {
//   let timer = null;
//   return function() {
//     if (!timer) {
//       timer = setTimeout(() => {
//         action.apply(this, arguments);
//         timer = null;
//       }, delay);
//     }
//   };
// };

var t = 1;
var throttleContainer = document.getElementById('throttle');

function getUserAction() {
  throttleContainer.innerHTML = t++;
}

var setUserAction = throttle(getUserAction, 1000);

throttleContainer.onmousemove = setUserAction;
