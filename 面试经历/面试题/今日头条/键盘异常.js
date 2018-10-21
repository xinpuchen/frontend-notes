/**
 * 工程师小张的键盘坏了，按键 `i` 会和 `backspace` 一样会删除文档中光标前的字符，
 * 按键 `o` 会撤销上一步的输入或删除操作!
 * 小现在在键盘上敲了一串字符，请给出他实际看到的效果。
 *
 * 输入描述:
 * 一行由小写字母与数字组合成的字符串。
 * 输出描述:
 * 一行由小写字母与数字组合成的字符串。
 *
 * 示例1
 * 输入
 * zijietiaodong
 * 输出
 * eng
 *
 * 示例2
 * 输入
 * idea
 * 输出
 * dea
 *
 * 备注:
 * 对于100%输入数据，字符串对于的字符个数<=100000
 */

const Str = "zijietiaodong",
  main = (str = Str, arr = []) => {
    for (let i = 0; i < str.length; i++) {
      if (str[i] == "i") {
        if (str[i + 1] !== "o") arr.pop();
      } else if (str[i] == "o") {
        arr.pop();
      } else {
        arr.push(str[i]);
      }
    }
    return arr;
  };
console.log(
  main()
    .toString()
    .replace(/,/g, "")
);
