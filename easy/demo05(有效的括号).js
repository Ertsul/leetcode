// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 示例 1:

// 输入: "()"
// 输出: true
// 示例 2:

// 输入: "()[]{}"
// 输出: true
// 示例 3:

// 输入: "(]"
// 输出: false
// 示例 4:

// 输入: "([)]"
// 输出: false
// 示例 5:

// 输入: "{[]}"
// 输出: true

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/valid-parentheses
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    item && this.stack.push(item);
  }
  pop() {
    if (!this.isEmpty()) {
      return this.stack.pop();
    }
  }
  getTop() {
    if (!this.isEmpty()) {
      return this.stack[this.getLength() - 1];
    }
  }
  isEmpty() {
    return this.stack.length == 0;
  }
  getLength() {
    return this.stack.length;
  }
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (typeof s != "string") {
    return false;
  }

  if (!s) {
    return true;
  }

  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
    ")": "(",
    "]": "[",
    "}": "{"
  };

  let stack = new Stack();

  let len = s.length;
  let res = false;
  stack.push(s[0]);
  for (let i = 1; i < len; i++) {
    const item = s[i];
    const mapItem = map[item];

    if (stack.getTop() === mapItem) {
      res = true;
      stack.pop();
    } else {
      stack.push(item);
    }
  }

  if (stack.getLength()) {
    res = false;
  }

  return res;
};

const res = isValid("{[]}");
console.log("res", res);
