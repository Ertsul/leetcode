// 统计所有小于非负整数 n 的质数的数量。

// 示例:

// 输入: 10
// 输出: 4
// 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。

/**
 * @param {number} n
 * @return {number}
 */
// var countPrimes = function (n) {
//   if (n <= 2) {
//     return 0;
//   }
//   let i = 2;
//   let j = 2;
//   let right = true;
//   let count = 0;
//   while (i < n) {
//     if (i == 2 || (i > 2 && i % 2 != 0)) {
//       while (j <= Math.sqrt(i)) {
//         if (i % j == 0) {
//           right = false;
//           break;
//         }
//         j++;
//       }
//       if (right) {
//         count++;
//       }
//     }
//     i++;
//     j = 2;
//     right = true;
//   }
//   return count;
// };

/**
 * @param {number} n
 * @return {number}
 * 2 是质数，2 * 2 ， 2 * 3 ... 不是质数
 * ...
 */
const countPrimes = function (n) {
  let isPrim = new Array(n);
  isPrim.fill(true);
  for (let i = 2; i * i < n; i++) {
    if (isPrim[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrim[j] = false;
      }
    }
  }
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrim[i]) {
      count++;
    }
  }
  return count;
};

console.log(countPrimes(20));
