/**
 * 仅限Javascript语言：
 * 请实现下面的链式调用函数，以使其能够实现链式调用
 * var num=new Sub(0).add(100).add(50).add(-30).getResult()；
 * console.log(num)==>120
 * ------
 * var Sub=function(initValue){
 * // 请在此处编写你的代码，其他部分请勿修改，否则不记分。
 * // begin
 * // end
 * // 以下代码请勿修改
 * var s=read_line()
 * print(eval(s))
 * 输入
 * Sub为一个function，请补充Sub内的逻辑部分
 * 使其能够链式调用，初始值默认为0，链式调用add方法进行数字累加，如果add
 * 方法传入的数字非法则不进行累加?
 * 最终调用getResult()可以获得累加的结果
 * 输出
 * 最终调用getResut()可以获得累加的结果，将累加的数字返回即可
 *
 * 样例输入
 * new Sub(O）.add(100）.add(50).add(-30).getResult()；
 * 样例输出
 * 120
 */
/* ------ */
var Sub = function (initValue) {
  /* 请在此处编写你的代码，其他部分请勿修改，否则不记分。 */
  // begin
  this.num = initValue;
  this.add = (i) => {
    this.num += i;
    // console.log(this.num);
    return this;
  };
  this.getResult = () => {
    return this.num;
  }
  // end
}

var num = new Sub(0)
  .add(100)
  .add(50)
  .add(-30)
  .getResult();
console.log(num); //==> 120
// 以下代码请勿修改 var s = read_line() print(eval(s))