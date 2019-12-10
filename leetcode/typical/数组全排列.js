/**
 * 递归实现js数组全排列
 *
 * 规律
 * 当n = 1时， 数组arr = [A]，全排列结果为
 * [A];
 * 当n = 2时， 数组arr = [A, B]，全排列结果为
 * [A, B]
 * [B, A];
 * 当n = 3时， 数组arr = [A, B, C]，全排列结果为
 * [A, B, C]
 * [A, C, B]
 * [B, A, C]
 * [B, C, A]
 * [C, A, B]
 * [C, B, A]
 *
 * 到n = 3时可以看出全排列有以下规律
 * 1. 固定第一个元素，将剩下的元素进行全排列处理；
 * 2. 将第一个元素与依次与第i（1<i<=arr.length）个元素互换，将剩下的元素进行全排列处理；
 * 3. 结束
 * 很适合使用递归解决。只要写一个全排列函数 permutation，能固定一个下标为i的元素，剩下元素再进行全排列即可。
 *
 * @class Permutation
 */

class Permutation {
  constructor(arr) {
    this.len = 0;
    this.arr = Array.from(arr);
    this.result = [];
    this.run(0);
  }

  run(index) {
    if (index === this.arr.length - 1) {
      this.result.push(Array.from(this.arr));
      this.len++;
    }
    for (let i = index; i < this.arr.length; i++) {
      [this.arr[index], this.arr[i]] = [this.arr[i], this.arr[index]];
      this.run(index + 1);
      [this.arr[index], this.arr[i]] = [this.arr[i], this.arr[index]];
    }
  }
}

const p = new Permutation(['A', 'B', 'C']);
console.log(p.len, ...p.result);
