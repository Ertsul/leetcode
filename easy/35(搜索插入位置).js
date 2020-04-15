// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 你可以假设数组中无重复元素。

// 示例 1:

// 输入: [1,3,5,6], 5
// 输出: 2
// 示例 2:

// 输入: [1,3,5,6], 2
// 输出: 1
// 示例 3:

// 输入: [1,3,5,6], 7
// 输出: 4
// 示例 4:

// 输入: [1,3,5,6], 0
// 输出: 0

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/search-insert-position
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (target < nums[0]) {
    return 0;
  }
  if (target > nums[nums.length - 1]) {
    return nums.length;
  }

  let findIndex = -1;
  let targetInsetIndex = -1;
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (item == target) {
      findIndex = i;
    }
    if (target <= item && target > nums[i - 1]) {
      targetInsetIndex = i;
    }
  }
  return findIndex == -1 ? targetInsetIndex : findIndex;
};

// 优化 二分查找法
// var searchInsert = function (nums, target) {
//   let mid;
//   let low = 0;
//   let high = nums.length;
//   while (low < high) {
//     mid = low + Math.floor((high - low) / 2);
//     if (target < nums[mid]) {
//       high = mid;
//     } else if (target > nums[mid]) {
//       low = mid + 1;
//     } else {
//       return mid;
//     }
//   }
//   return low;
// };


console.log(searchInsert([1,3,5,6], 0));
