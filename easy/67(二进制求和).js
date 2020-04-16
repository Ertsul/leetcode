// 给你两个二进制字符串，返回它们的和（用二进制表示）。

// 输入为 非空 字符串且只包含数字 1 和 0。

//  

// 示例 1:

// 输入: a = "11", b = "1"
// 输出: "100"
// 示例 2:

// 输入: a = "1010", b = "1011"
// 输出: "10101"
//  

// 提示：

// 每个字符串仅由字符 '0' 或 '1' 组成。
// 1 <= a.length, b.length <= 10^4
// 字符串如果不是 "0" ，就都不含前导零。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/add-binary
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary1 = function (a, b) {
  c = a.split('').reverse().join('');
  d = b.split('').reverse().join('');
  let i = 0;
  let res = [];
  let itemSum = 0;
  let ifAddOne = false;
  while (i < c.length && i < d.length) {
    itemSum = Number(c[i]) + Number(d[i]) + (ifAddOne ? 1 : 0);
    ifAddOne = itemSum >= 2;
    res.push(ifAddOne ? itemSum - 2 : itemSum);
    i++;
  }
  if (i == c.length) {
    while (i < d.length) {
      itemSum = Number(d[i]) + (ifAddOne ? 1 : 0);
      ifAddOne = itemSum >= 2;
      res.push(ifAddOne ? itemSum - 2 : itemSum);
      i++;
    }
  } else if (i == d.length) {
    while (i < c.length) {
      itemSum = Number(c[i]) + (ifAddOne ? 1 : 0);
      ifAddOne = itemSum >= 2;
      res.push(ifAddOne ? itemSum - 2 : itemSum);
      i++;
    }
  }
  ifAddOne && res.push(1);
  return res.reverse().join('');
};

var addBinary = function (a, b) {
  c = a.split('').reverse().join('');
  d = b.split('').reverse().join('');
  const maxLen = c.length > d.length ? c.length : d.length;
  c = c.padEnd(maxLen, '0');
  d = d.padEnd(maxLen, '0');
  let i = 0;
  let res = [];
  let itemSum = 0;
  let ifAddOne = false;
  while (i < c.length) {
    itemSum = Number(c[i]) + Number(d[i]) + (ifAddOne ? 1 : 0);
    ifAddOne = itemSum >= 2;
    res.push(ifAddOne ? itemSum - 2 : itemSum);
    i++;
  }
  ifAddOne && res.push(1);
  return res.reverse().join('');
};

console.log(addBinary('10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101', '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011'));



