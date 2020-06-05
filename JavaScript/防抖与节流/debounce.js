/**
 * 防抖：事件触发动作完后一段时间触发一次
 * https://github.com/mqyqingfeng/Blog/issues/22
 */

// var debounce = function(action, delay) {
//   var timer = null;
//   return function() {
//     var _this = this;
//     var args = arguments;
//     clearTimeout(timer);
//     timer = setTimeout(function() {
//       action.apply(_this, args);
//     }, delay);
//   };
// };

const debounce = function(action, delay) {
  let timer = null;
  return function() {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      action.apply(this, arguments);
      timer = null;
    }, delay);
  };
};

var d = 1;
var debounceContainer = document.getElementById('debounce');

function getUserAction() {
  debounceContainer.innerHTML = d++;
}

var setUseAction = debounce(getUserAction, 1000);

debounceContainer.onmousemove = setUseAction;
