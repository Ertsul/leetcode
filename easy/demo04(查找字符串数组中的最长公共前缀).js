// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:

// 所有输入只包含小写字母 a-z 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-common-prefix
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string[]} strs
 * @return {string}
 * 水平扫描法：以第一个未基准字符串 prefix，遍历余下的字符串，通过判断是否有匹配的前缀为二次循环条件，不断缩减 prefix 的长度。
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) {
    return "";
  }
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) != 0) {
      prefix = prefix.substr(0, prefix.length - 1); // 缩减 prefix 长度
      if (!prefix) {
        return "";
      }
    }
  }
  return prefix;
};

// const res = longestCommonPrefix(["flower", "flight", "flow"]);
const res = longestCommonPrefix(["flower", "flow", "flight"]);
console.log(res);
