/**
 * 特点：通过全局规划,将大问题分割成小问题来取最优解
 * 案例：最少硬币找零
 * 美国有以下面额(硬币）：d1=1, d2=5, d3=10, d4=25
 * 如果要找36美分的零钱，我们可以用1个25美分、1个10美分和1个便士1美分)
 *
 * @param {Array} coins
 */

class MinCoinChange {
  constructor(coins) {
    this.coins = coins;
    this.cache = {};
  }

  makeChange(amount) {
    if (!amount) return [];
    if (this.cache[amount]) return this.cache[amount];
    let min = [],
      newMin,
      newAmount;
    this.coins.forEach(coin => {
      newAmount = amount - coin;
      if (newAmount >= 0) {
        newMin = this.makeChange(newAmount);
      }
      if (
        newAmount >= 0 &&
        (newMin.length < min.length - 1 || !min.length) &&
        (newMin.length || !newAmount)
      ) {
        min = [coin].concat(newMin);
      }
    });
    return (this.cache[amount] = min);
  }
}

const minCoinChange = new MinCoinChange([1, 5, 10, 25]);
console.log(minCoinChange.makeChange(36));
// [1, 10, 25]
const minCoinChange2 = new MinCoinChange([1, 3, 4]);
console.log(minCoinChange2.makeChange(6));
// [3, 3]
