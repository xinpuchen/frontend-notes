/**
 * 题干；给定一个整数n，计算所有小于等于n的非负整数中数字1出现的个数。注意：运行时间
 *
 * 输入：12
 * 输出：5  // 解释：数字1出现在以下数字中：1,10,11,12。
 * 输入：100
 * 输出：21 // 解释：数字1出现在以下数字中：1,10,11,12,13,14,15,16,17,18,19,21,31,41,51,61,71,81,91,100。
 */
const N = 12,
  getOne = (n = N) => {
    let num = 0;
    for (let index = 1; index <= n; index++) {
      const element = String(index).split('');
      element.forEach(e => {
        if (e === '1') {
          num++;
        }
      });
    }
    return num;
  };

console.log(`小于等于${N}的非负整数中数字1出现的个数为${getOne()}`);
console.log(`小于等于100的非负整数中数字1出现的个数为${getOne(100)}`);
