/**
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 * 比如输入字符串为 "LEETCODEISHIRING"，排列如下：
 * 行数为 3 时
 * L   C   I   R
 * E T O E S I I G
 * E   D   H   N
 * 行数为 4 时
 * L     D     R
 * E   O E   I I
 * E C   I H   N
 * T     S     G
 * 行数为 5 时
 * L       I
 * E     E S
 * E   D   H   G
 * T O     I N
 * C       R
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let spaceCount = numRows - 2; // 开始的空格数量
  let res = '';
  let rowCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (rowCount === 0) { // 第一行
      res += s[i];
      if ((i + 1) % numRows === 0) {
        res += '\n';
        rowCount++;
      }
    }
    else {
      res = ' '.repeat(spaceCount--) + res + '\n';
      if (spaceCount === 0) {
        spaceCount = numRows - 2;
      }
    }
  }
  return res;
}

console.log(convert('LEETCODEISHIRING', 3));
