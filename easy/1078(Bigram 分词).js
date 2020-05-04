// 给出第一个词 first 和第二个词 second，考虑在某些文本 text 中可能以 "first second third" 形式出现的情况，其中 second 紧随 first 出现，third 紧随 second 出现。

// 对于每种这样的情况，将第三个词 "third" 添加到答案中，并返回答案。

//

// 示例 1：

// 输入：text = "alice is a good girl she is a good student", first = "a", second = "good"
// 输出：["girl","student"]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/occurrences-after-bigram
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
  //   const textArr = text.split(" ");
  //   let res = [];
  //   let i = 0;
  //   while (i < textArr.length) {
  //     if (textArr[i] == first && textArr[i + 1] == second) {
  //      if (i + 2 < textArr.length) {
  //          res.push(textArr[i + 2]);
  //         i = i + 2;
  //       } else {
  //         break;
  //       }
  //     } else {
  //       i++;
  //     }
  //   }
  //   return res;
  var text = text.split(" ");
  var third = [];
  for (var i = 0; i < text.length - 2; ++i) {
    if (text[i] == first && text[i + 1] == second) {
      third.push(text[i + 2]);
    }
  }

  return third;
};

console.log(findOcurrences("we will we will rock you", "we", "will"));
