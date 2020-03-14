// 示例 1：

// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
// 示例 2：

// 输入: "cbbd"
// 输出: "bb"

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
  if (typeof s != "string") {
    throw new Error("type Error");
  }
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (s.length - i <= res.length) {
      break;
    }
    let j = 0;
    for (j; j < s.length; j++) {
      if (j - i < res.length) {
        continue;
      }
      const str = s.substring(i, j + 2);
      if (
        str ===
          str
            .split("")
            .reverse()
            .join("") &&
        str.length > res.length
      ) {
        res = str;
      }
    }
  }
  return res;
};

const startTime = Date.parse(new Date());
console.log("startTime", startTime);

const res = longestPalindrome1(
  // "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
  "babad"
);

console.log("res", res);
const endTime = Date.parse(new Date());
console.log("endTime", endTime);
console.log(endTime - startTime);
