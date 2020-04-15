// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

//  

// 示例：

// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/3sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function quickSort(nums) {
  if (nums.length == 0) {
    return [];
  }
  let midIndex = Math.floor(nums.length / 2);
  let mid = nums.splice(midIndex, 1);
  let left = [];
  let right = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < mid) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  return quickSort(left).concat(mid, quickSort(right));
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let sortedArr = quickSort(nums);
  let baseIndex = 0;
  let leftPointer = 0;
  let rightPointer = 0;
  let res = [];
  let twoSum = 0;
  console.log("sortedArr", sortedArr);
  
  while (baseIndex < sortedArr.length) {
    if (baseIndex != 0 && sortedArr[baseIndex] == sortedArr[baseIndex - 1]) {
      baseIndex++;
      continue;
    }
    for (leftPointer = baseIndex + 1, rightPointer = sortedArr.length - 1; leftPointer < rightPointer;) {
      twoSum = sortedArr[leftPointer] + sortedArr[rightPointer];
      console.log(sortedArr[baseIndex], sortedArr[leftPointer], sortedArr[rightPointer]);
      
      if (nums[baseIndex] > 0 && nums[leftPointer] > 0) {
        break;
      }
      if (rightPointer != sortedArr.length && sortedArr[rightPointer] == sortedArr[rightPointer + 1] && leftPointer != 1 && sortedArr[leftPointer] == sortedArr[leftPointer - 1]) {
        leftPointer++;
        rightPointer--;
        continue;
      }
      if (twoSum + sortedArr[baseIndex] < 0) {
        leftPointer++;
      } else if (twoSum + sortedArr[baseIndex] > 0) {
        rightPointer--;
      } else {
        res.push([sortedArr[baseIndex], sortedArr[leftPointer], sortedArr[rightPointer]]);
        leftPointer++;
        rightPointer--;
      }
    }
    baseIndex++;
  }
  console.log(res);
  return res;
};
// [-4, -1, -1, 0, 1, 2]
threeSum([-4, -1, -1, 0, 1, 2]);