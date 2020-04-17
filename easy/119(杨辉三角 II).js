// 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。

/**
 * 获取杨辉三角的指定行
 * 直接使用组合公式C(n,i) = n!/(i!*(n-i)!)
 * 则第(i+1)项是第i项的倍数=(n-i)/(i+1);
 */

/**
* @param {number} rowIndex
* @return {number[]}
*/
var getRow = function (rowIndex) {
  // let res = [];
  // let item = [];
  // for (let i = 0; i <= rowIndex; i++) {
  //     if (i == 0) {
  //         res[0] = [1];
  //     } 
  //     if (i == 1) {
  //         res[1] = [1, 1];
  //     }
  //     if (i > 1) {
  //         for (let j = 0; j <= i; j++) {
  //             if (j == 0 || j == i) {
  //                 item[j] = 1;
  //             } else {
  //                 item[j] = res[i - 1][j - 1] + res[i - 1][j];
  //             }
  //         }
  //         res[i] = item;
  //         item = [];
  //     }
  // }
  // return res[rowIndex];
  let res = [];
  let cur = 1;
  for (let i = 0; i <= rowIndex; i++) {
    res.push(cur);
    cur = cur * (rowIndex - i) / (i + 1);
  }
  return res;
};