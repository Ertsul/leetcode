/**
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。数值范围为 [−2^31,  2^31 − 1]
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  if (x > Math.pow(2, 31) - 1 || x < -Math.pow(2, 31)) {
    return;
  }
  let ifNegative = false; // 负数判断
  let xStringed = String(x);  // 转化为字符串
  let noCharNum = ''; // 用于存放无符号数字
  if (xStringed.includes('-')) {
    ifNegative = true;
    noCharNum = xStringed.slice(1);
  } else {
    noCharNum = xStringed;
  }
  // 反转
  let resNum = Number(noCharNum.split('').reverse().join(''));
  if (ifNegative) {
    resNum = -resNum;
  }
  if (resNum > Math.pow(2, 31) - 1 || resNum < -Math.pow(2, 31)) {
    return 0;
  }
  return resNum;
};

console.log(reverse(-78900000));