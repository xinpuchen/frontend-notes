// 给定一个升序整型数组[0,1,2,4,5,7,13,15,16],找出其中连续出现的数字区间，输出为["0->2","4->5","7","13","15->16"]

function summaryRanges(
  arr = [0, 1, 2, 4, 5, 7, 13, 15, 16, 17, 19, 20, 21, 22, 23, 34],
) {
  var start = 0;
  var end = 1;
  var result = [];
  if (arr.length < 2) return arr;
  while (end <= arr.length) {
    if (arr[end] - arr[end - 1] === 1) {
      end++;
    } else {
      if (end - start === 1) {
        result.push(`${arr[start]}`);
      } else {
        result.push(`${arr[start]}->${arr[end - 1]}`);
      }
      start = end;
      end = start + 1;
    }
  }
  return result;
}
console.log(summaryRanges());
