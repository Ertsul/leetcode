// 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。

// 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

// 说明:

// 返回的下标值（index1 和 index2）不是从零开始的。
// 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
// 示例:

// 输入: numbers = [2, 7, 11, 15], target = 9
// 输出: [1,2]
// 解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  // 暴力法
  // let i = 0;
  // let index2 = 0;
  // while (numbers[i] <= target && i < numbers.length) {
  //   let lastNums = numbers.slice(i + 1);
  //   index2 = lastNums.indexOf(target - numbers[i]);
  //   console.log(lastNums, index2);
  //   if (index2 != -1) {
  //     return [i + 1, index2 + i + 2];
  //   }
  //   i++;
  // }
  // return [];

  // 双指针法
  let leftPoint = 0;
  let rightPoint = numbers.length - 1;
  let sum = 0;
  while (leftPoint < rightPoint) {
    sum = numbers[leftPoint] + numbers[rightPoint];
    if (sum < target) {
      leftPoint++;
    } else if (sum > target) {
      rightPoint--;
    } else {
      return [leftPoint + 1, rightPoint + 1];
    }
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 13));
