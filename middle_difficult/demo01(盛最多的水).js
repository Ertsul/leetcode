
// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 说明：你不能倾斜容器，且 n 的值至少为 2。

// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49

/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function (height) {
//   let max = 0;
//   let res = 0;
//   let xLen = 0;
//   let yLen = 0;
//   for (let i = 0; i < height.length; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       xLen = j - i;
//       yLen = height[j] >= height[i] ? height[i] : height[j];
//       res = xLen * yLen;
//       if (res > max) {
//         max = res;
//       }
//     }
//   }
//   return max;
// };


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let minHeight = 0
  let area = 0;
  for (let i = 0, j = height.length - 1; i <= j;) {
    minHeight = height[i] < height[j] ? height[i++] : height[j--];
    area = (j - i + 1) * minHeight;
    max = area > max ? area : max;
  }
  return max;
};