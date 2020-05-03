// 给定一个正整数，返回它在 Excel 表中相对应的列名称。

// 例如，

//     1 -> A
//     2 -> B
//     3 -> C
//     ...
//     26 -> Z
//     27 -> AA
//     28 -> AB
//     ...
// 示例 1:

// 输入: 1
// 输出: "A"
// 示例 2:

// 输入: 28
// 输出: "AB"
// 示例 3:

// 输入: 701
// 输出: "ZY"

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/excel-sheet-column-title
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  const keyMap = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  if (n <= 26) {
    return keyMap[n - 1];
  }
  let res = "";
  let highItemBit = 0;
  while (n > 26) {
    highItemBit = Math.floor(n / 26); // 获取高位
    n = n % 26;
    if (n == 0) {
      res += keyMap[highItemBit - 2];
    } else {
      res += keyMap[highItemBit - 1];
    }
  }
  if (n == 0) {
    n = 26;
  }
  res += keyMap[n - 1];
  return res;
};

console.log(convertToTitle(703));
