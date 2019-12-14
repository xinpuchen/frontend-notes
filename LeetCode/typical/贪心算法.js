/**
 *
 * 特点：通过最优解来解决问题
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
    let change = [],
      total = 0;
    [...this.coins].reverse().forEach(coin => {
      while (total + coin <= amount) {
        change.push(coin);
        total += coin;
      }
    });
    return change;
  }
}

const minCoinChange = new MinCoinChange([1, 5, 10, 25]);
console.log(minCoinChange.makeChange(36));
console.log(minCoinChange.makeChange(34));
console.log(minCoinChange.makeChange(6));
