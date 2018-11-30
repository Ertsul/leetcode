/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的 两个 整数。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  let res = []; // 结果数组
  let flag = 0; // 标志，用于标记当前的数组单元下标是否已加入结果数据
  for (let i = 0; i < nums.length; i++) { // 循环遍历整个数组
    for (let j = 0; j < res.length; j++) { // 检查当前的数组单元下标是否已加入结果数据
      if (res[j] === nums[i]) { // 
        flag = 1;
        break;
      }
    }
    if (flag === 0) {
      for (let k = i + 1; k < nums.length; k++) {
        if (nums[i] + nums[k] === target) { // 将下标加入结果数组
          res.push(i);
          res.push(k);
        }
      }
    } else if (flag === 1) {
      flag = 0; // 重置标志
    }
  }
  return res;
};

let res = twoSum([1, 2, 3, 4, 5, 6], 6);
console.log(res);