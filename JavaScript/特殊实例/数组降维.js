// 彻底降维
const flattenDeep = arr =>
  Array.isArray(arr)
    ? arr.reduce((a, b) => [...a, ...flattenDeep(b)], [])
    : [arr];

console.log(flattenDeep([1, [[2], [3, [4]], 5]]));
