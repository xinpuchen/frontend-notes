/**
 * 给一些驼峰式的变量名，将它们转换为下划线式的，要求及说明如下:
 *
 * 输入数据一定为合法的“驼峰式”变量名，变量名由若干单词组成，单词应当为首字母大写，或全大写，或全小写。
 * 如"variable", "oneVariable", "OneHTTPRequest"。
 * 输出数据应当为合法的“下划线式”变量名，变量名由若干单词组成，单词应当为全小写，
 * 相邻单词之间以单个下划线连接。
 * 如："variable", "one_ variable", "one_ http_ request" 。
 *
 * 你不需要考虑转换后的变量名可能是语言的关键词的情况，比如"Struct" 直接转换为"struct"即可。
 *
 * 你应当认为变量名中的单词尽可能的少，
 * 如："OneHTTPRequest"，可以当成"one", "http","request"三个单词，
 * 也可以当成"one", "h", "h", "t", "p","request"六个单词，
 * 应当选取"one", "http", "request"这种方案。
 *
 * 输入描述:
 * 第一行一个整数n，表示有n个变量需要转换。
 * 接下来n行，每行一个字符串，表示要被转换的变量名。
 *
 * 输出描述：
 * 一共n行，第i行表示第i个变量被转换后的结果。
 *
 * 示例1
 * 输入输出示例仅供调试，后台判题数据一般不包含示例
 *
 * 输入：
 * variable
 * oneVariable
 * OneHTTPRequest
 *
 * 输出：
 * variable
 * one variable
 * one_ http_ request
 */

const N = 3,
  ARRAY = ["variable", "oneVariable", "OneHTTPRequest"],
  isUpperCase = char => {
    const regexp = /^[A-Z]+$/;
    return regexp.test(char);
  },
  tansWord = str => {
    str = str
      .split("")
      .map((e, i, a) => {
        if (i > 0 && i < a.length - 1) {
          if (!isUpperCase(e) && isUpperCase(a[i + 1])) return `${e}_`;
          else if (
            (!isUpperCase(a[i - 1]) && isUpperCase(e)) ||
            (!isUpperCase(a[i + 1]) && isUpperCase(e))
          )
            return `_${e}`;
          else if (!isUpperCase(a[i + 1]) && isUpperCase(e)) return `_${e}`;
        }
        return e;
      })
      .join("")
      .replace(/_+/g, "_")
      .toLowerCase();
    return str;
  },
  main = (n = N, arr = ARRAY) => {
    arr.map(e => console.log(tansWord(e)));
    return;
  };

main();
