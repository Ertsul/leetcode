// 118. 杨辉三角

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let res = [];
  let item = [];
  for (let i = 0; i < numRows; i++) {
      if (i == 0) {
          res[0] = [1];
      } 
      if (i == 1) {
          res[1] = [1, 1];
      }
      if (i > 1) {
          for (let j = 0; j <= i; j++) {
              if (j == 0 || j == i) {
                  item[j] = 1;
              } else {
                  item[j] = res[i - 1][j - 1] + res[i - 1][j];
              }
          }
          res[i] = item;
          item = [];
      }
  }
  return res;
};