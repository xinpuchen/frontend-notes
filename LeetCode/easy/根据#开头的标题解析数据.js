/**
输入一个 Array，每个元素都是#为前缀的标题，保证层级连续，然后返回解析好的数据结构
输入：["# a", "## b", "## c", "### d", "# e"];
输出：
[
  { hn: "1", title: "a" },
  { hn: "1.1", title: "b" },
  { hn: "1.2", title: "c" },
  { hn: "1.2.1", title: "d" },
  { hn: "2", title: "e" },
];
*/
const compile = arr => {
  const result = [];
  const cache = [];
  let i = 0;
  while (i < arr.length) {
    const [hn, title] = arr[i].split(' ');
    cache[hn.length - 1] = (cache[hn.length - 1] || 0) + 1;
    result.push({ hn: cache.slice(0, hn.length).join('.'), title });
    i++;
  }
  cache.length = 0;
  return result;
};
console.log(...compile(['# a', '## b', '## c', '### d', '# e']));
