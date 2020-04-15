// 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

// 你可以假设除了整数 0 之外，这个整数不会以零开头。

// 示例 1:

// 输入: [1,2,3]
// 输出: [1,2,4]
// 解释: 输入数组表示数字 123。
// 示例 2:

// 输入: [4,3,2,1]
// 输出: [4,3,2,2]
// 解释: 输入数组表示数字 4321。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/plus-one
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let lastItemSum = digits[digits.length - 1] + 1;
  if (lastItemSum < 10) {
    digits[digits.length - 1] = lastItemSum;
    return digits;
  } else {
    let yushu = lastItemSum - 10;
    let res = [yushu];
    let itemSum = 0;
    let ifAddOne = true;
    if (digits.length >= 2) {
      for (let i = digits.length - 2; i >= 0; i--) {
        itemSum = digits[i] + (ifAddOne ? 1 : 0);
        if (itemSum < 10) {
          res.unshift(itemSum);
          ifAddOne = false;
          itemSum = 0;
        } else {
          res.unshift(itemSum - 10);
          ifAddOne = true;
          itemSum = 0;
        }
      }
      if (ifAddOne) {
        res.unshift(1);
      }
    } else {
      res.unshift(1);
    }
    return res;
  }
};

console.log(plusOne([8, 9]));