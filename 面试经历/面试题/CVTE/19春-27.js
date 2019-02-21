const test = "#FFFFFF";

function getNum(i) {
  const ARRAY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  return ARRAY.findIndex(e => e === i);
}

function main(str) {
  const a = getNum(str[1]) * 16 + getNum(str[2]);
  const b = getNum(str[3]) * 16 + getNum(str[4]);
  const c = getNum(str[5]) * 16 + getNum(str[6]);

  return [a, b, c];
}

console.log(main(test));
