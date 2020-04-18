// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

// 说明：

// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

// 示例 1:

// 输入: [2,2,1]
// 输出: 1
// 示例 2:

// 输入: [4,1,2,1,2]
// 输出: 4

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/single-number
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


/**
 * @param {number[]} nums
 * @return {number}
 * 异或求解：相同的数字，异或计算后的结果为0，0与任何数字的异或结果还是这个数字。
 */
var singleNumber = function (nums) {
  // if (nums.length == 1) {
  //   return nums[0];
  // }
  // nums = nums.sort();
  // console.log(nums);
  // for (let i = 0; i < nums.length; i++) {
  //   if (i == 0 && nums[0] != nums[1]) {
  //     return nums[0];
  //   } else if (nums[i] != nums[i - 1] && nums[i] != nums[i + 1]) {
  //     return nums[i]
  //   }
  // }
  return nums.reduce((pre, cur) => pre ^ cur, 0);
};

console.log(singleNumber([2, 2, 1]));
