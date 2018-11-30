/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestsubStr2ing = function (s) {
  if (!s) {
    return 0;
  }
  let startIndex = 0, // 匹配字符串开始位置
    endIndex = 0, // 匹配字符串结束位置
    maxNoRepeatLen = 0, // 最长无重复字符串长度
    subStr1 = '', // 外层当前进行匹配的字符串
    subStr2 = '', // 里层当前进行匹配的字符串
    setStr = '';  // 用于判断是否存在重复的字符
  for (let i = 0; i < s.length; i++) {
    startIndex = i;
    subStr1 = s.slice(startIndex);
    if (subStr1.length < maxNoRepeatLen) { // 外层剩下的字符串长度 < 最长无重复字符串长度，跳出循环
      ifEnd = true;
      break;
    }
    for (let j = i + 1; j <= s.length; j++) {
      endIndex = j;
      subStr2 = s.slice(startIndex, endIndex);
      if (subStr2.length < maxNoRepeatLen) { // 里层剩下的字符串长度 < 最长无重复字符串长度，跳到下一次循环
        ifEnd = true;
        continue;
      }
      // 判断匹配字符串是否有重复字符
      setStr = [...new Set(subStr2)].join('');
      if (subStr2.length == setStr.length && endIndex - startIndex > maxNoRepeatLen) {
        maxNoRepeatLen = endIndex - startIndex;
      }
    }
  }
  return maxNoRepeatLen;
};

let res = lengthOfLongestsubStr2ing("aaaabcdddaaa");
console.log(res);