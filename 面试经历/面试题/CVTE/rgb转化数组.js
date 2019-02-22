/**
 * 输入一个十六进制的颜色值，输出他对应的 RGB 值，以数组形式输出
 *
 * 示例一
 * 输入 ‘#FFFFFF’， 输出 [0, 0, 0]
 * 示例二
 * 输入 ‘#3D5EFF 输出 [61, 94, 255]
 * 示例三
 * 输入 ‘#7A6743 输出 [122, 103, 67]
 */

const getNum = i => {
  const ARRAY = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"
  ];
  return ARRAY.findIndex(e => e === i);
};

const main = (str = '#7A6743') => {
  const a = getNum(str[1]) * 16 + getNum(str[2]);
  const b = getNum(str[3]) * 16 + getNum(str[4]);
  const c = getNum(str[5]) * 16 + getNum(str[6]);
  return [a, b, c];
};

console.log(main());
