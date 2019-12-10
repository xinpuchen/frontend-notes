/**
 * 斐波那契而数列： 1,1,2,3,5,8...
 * @param {Number} n
 */

// 递归实现
function Fibonacci(n) {
  let number = Number(n) === parseInt(n) ? Number(n) : -1;
  if (number <= 0) {
    throw new Error('Please input a valid number');
  } else {
    if (n == 1 || n == 2) {
      return 1;
    } else {
      return Fibonacci(n - 1) + Fibonacci(n - 2);
    }
  }
}

// 自底向上求
function FibonacciII(n) {
  let number = Number(n) === parseInt(n) ? Number(n) : -1;
  if (number <= 0) {
    throw new Error('Please ...');
  } else {
    if (n == 1 || n == 2) {
      return 1;
    } else {
      let fibArr = [1, 1];
      for (let i = 2; i < n; i++) {
        fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
      }
      return fibArr[n - 1];
    }
  }
}

// ES6
const FibonacciIII = n => {
  let a = 0,
    b = 1,
    i = 1;
  while (i++ <= n) {
    [a, b] = [b, a + b];
  }
  return a;
};

// 尾递归
function FibonacciIIII(n, n1 = 0, n2 = 1) {
  if (n <= 1) {
    return n2;
  }
  return FibonacciIIII(n - 1, n2, n1 + n2);
}

// 动态规划
function FibonacciIIIII(n) {
  let n1 = 1,
    n2 = 1,
    sum = 1;
  for (let i = 3; i <= n; i += 1) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
  }
  return sum;
}

// 通项公式
function FibonacciIIIIII(n) {
  var sum = 0;
  for (let i = 1; i <= n; i += 1) {
    sum += fib(i);
  }
  return sum;

  function fib(n) {
    const SQRT_FIVE = Math.sqrt(5);
    return Math.round(
      (1 / SQRT_FIVE) *
        (Math.pow(0.5 + SQRT_FIVE / 2, n) - Math.pow(0.5 - SQRT_FIVE / 2, n)),
    );
  }
}

// 变量缓存
var FibonacciIIIIIII = (function() {
  var memory = {};
  return function(n) {
    if (n == 0 || n == 1) {
      return n;
    }
    if (memory[n - 2] === undefined) {
      memory[n - 2] = fibonacci(n - 2);
    }
    if (memory[n - 1] === undefined) {
      memory[n - 1] = fibonacci(n - 1);
    }
    return (memory[n] = memory[n - 1] + memory[n - 2]);
  };
})();
