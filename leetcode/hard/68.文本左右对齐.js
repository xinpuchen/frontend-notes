/*
 * @lc app=leetcode.cn id=68 lang=javascript
 *
 * [68] 文本左右对齐
 *
 * https://leetcode-cn.com/problems/text-justification/description/
 *
 * algorithms
 * Hard (35.60%)
 * Likes:    25
 * Dislikes: 0
 * Total Accepted:    2.2K
 * Total Submissions: 5.8K
 * Testcase Example:  '["This", "is", "an", "example", "of", "text", "justification."]\n16'
 *
 * 给定一个单词数组和一个长度 maxWidth，重新排版单词，使其成为每行恰好有 maxWidth 个字符，且左右两端对齐的文本。
 *
 * 你应该使用“贪心算法”来放置给定的单词；也就是说，尽可能多地往每行中放置单词。必要时可用空格 ' ' 填充，使得每行恰好有 maxWidth 个字符。
 *
 * 要求尽可能均匀分配单词间的空格数量。如果某一行单词间的空格不能均匀分配，则左侧放置的空格数要多于右侧的空格数。
 *
 * 文本的最后一行应为左对齐，且单词之间不插入额外的空格。
 *
 * 说明:
 *
 *
 * 单词是指由非空格字符组成的字符序列。
 * 每个单词的长度大于 0，小于等于 maxWidth。
 * 输入单词数组 words 至少包含一个单词。
 *
 *
 * 示例:
 *
 * 输入:
 * words = ["This", "is", "an", "example", "of", "text", "justification."]
 * maxWidth = 16
 * 输出:
 * [
 * "This    is    an",
 * "example  of text",
 * "justification.  "
 * ]
 *
 *
 * 示例 2:
 *
 * 输入:
 * words = ["What","must","be","acknowledgment","shall","be"]
 * maxWidth = 16
 * 输出:
 * [
 * "What   must   be",
 * "acknowledgment  ",
 * "shall be        "
 * ]
 * 解释: 注意最后一行的格式应为 "shall be    " 而不是 "shall     be",
 * 因为最后一行应为左对齐，而不是左右两端对齐。
 * ⁠    第二行同样为左对齐，这是因为这行只包含一个单词。
 *
 *
 * 示例 3:
 *
 * 输入:
 * words =
 * ["Science","is","what","we","understand","well","enough","to","explain",
 * "to","a","computer.","Art","is","everything","else","we","do"]
 * maxWidth = 20
 * 输出:
 * [
 * "Science  is  what we",
 *⁠ "understand      well",
 * "enough to explain to",
 * "a  computer.  Art is",
 * "everything  else  we",
 * "do                  "
 * ]
 *
 *
 */
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  const flag = {
    floor: 0,
    length: 0,
  };
  words = words.reduce((p, e) => {
    if (p.length === 0 || flag.length + e.length + 1 > maxWidth) {
      p.push([e]);
      flag.floor = p.length - 1;
      flag.length = e.length;
    } else {
      p[flag.floor].push(e);
      flag.length += e.length + 1;
    }
    return p;
  }, []);
  return words.reduce((p, e, i, a) => {
    if (i === a.length - 1) {
      p.push(leftAlignment(e, maxWidth));
    } else {
      p.push(sideAlignment(e, maxWidth));
    }
    return p;
  }, []);
};

function sideAlignment (words, maxWidth) {
  if (words.length < 2) {
    return words[0].padEnd(maxWidth, ' ');
  }
  const sum = words.reduce((p, e) => {
    return p + e.length;
  }, 0);
  const L = (maxWidth - sum) % (words.length - 1);
  const R = (maxWidth - sum - L) / (words.length - 1);
  return words.reduce((p, e, i) => {
    if (i === 0) {
      p += e;
    } else if (i <= L) {
      p += ' '.repeat(R + 1) + e;
    } else {
      p += ' '.repeat(R) + e;
    }
    return p;
  }, '');
}

function leftAlignment (words, maxWidth) {
  return words.join(' ').padEnd(maxWidth, ' ');
}

// console.log(fullJustify(["Science","is","what","we","understand","well","enough","to","explain", "to","a","computer.","Art","is","everything","else","we","do"], 20).join('\n'));
// console.log(fullJustify(["What","must","be","acknowledgment","shall","be"], 16).join('\n'));
