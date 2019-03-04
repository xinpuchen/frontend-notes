/**
 * 题目描述
 * 请实现一个函数，将一个字符串中的空格替换成“%20”。
 *
 * 例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
 */

const { replaceSpace } = require('../playground/Interview-oriented');
const test = {
  str: 'We Are Happy'
};

// 空格替换
console.log(replaceSpace(test.str));
// 浏览器编码
console.log(encodeURIComponent(test.str));
