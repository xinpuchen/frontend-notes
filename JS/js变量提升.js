/**
 * 变量提升
 * 在生成执行环境时，会有两个阶段。
 * 1、创建阶段： js解释器会找出需要提升的变量和函数，并且给他们提前在内存中开辟好空间，
 *   函数的话会将整个函数存入内存中，变量只声明并且赋值为undefined。
 * 2、执行阶段： 可以直接提前使用
 * 3、在提升的过程中，相同的函数会覆盖上一个函数，并且函数优先于变量提升
 */
console.log(a); //undefined
var a = 100;
function foo(){
  console.log(a); // undefined
  var a = 200;
  console.log(a); // 200
}
foo();
console.log(a); // 100
// *************
b();
function b(){
  console.log('call b first');
}
function b(){
  console.log('call b second'); // call b second
}
var b = 'call b';
