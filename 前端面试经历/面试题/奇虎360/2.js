/**
 * 题目描述：
 * 小明在课上学习了进制转化。现在他有q个询问，每次询问想问你在[l,r]区间内，k进制表示中，k-1的数量最多的数是哪个数。比如当k=2时，9的二进制就是1001，那么他就有2个1。
 *
 * 输入
 * 测试用例包含多组
 *
 * 第一行一个q，表示有q组询问。
 *
 * 接下来q行，每行三个整数k, l, r, 分别表示进制数 , 以及查询的范围。
 *
 * 满足1<=q<=100000,2<=k<=16,1<=l<=r<=10^16
 *
 * 输出
 * 对于每组询问，输出答案。如果有多个答案，请输出最小的。
 *
 * 样例输入
 * 1
 * 8 1 100
 * 样例输出
 * 63
*/
const q = 3
const arr = [
  {
    k: 8,
    l: 1,
    r: 100
  }, {
    k: 8,
    l: 1,
    r: 100
  }, {
    k: 8,
    l: 1,
    r: 100
  }
]

for (let index = 0; index < q; index++) {
  const {k, l, r} = arr[index];
  k2 = k - 1;
  const a = [];
  for (let x = l; x <= r; x++) {
    const e = x.toString(k);
    const n = (e.split(k2)).length - 1;
    // console.log(`数字${x}===(${e})${k} 其中${k2}出现${n}次`);
    a.push({num: x, count: n});
  }
  const max = Math.max(...a.map(e => e.count));
  for (let y = 0; y < a.length; y++) {
    const e = a[y];
    if (e.count === max) {
      console.log(`数字${e.num}在[${l},${r}]中${k}进制时为(${e.num.toString(k)})${k}，可以得到${k2}的最大个数：${max}`);
      break;
    }
  }
}
