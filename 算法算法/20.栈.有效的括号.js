/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 创建一个栈
    let stack = []
    for (let i = 0; i < s.length; i++) {
        // 左符号入栈
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') stack.push(s[i])
            // 若右符号与左符号相对应，出栈
        else if (s[i] === ')' && stack[stack.length - 1] === '(') stack.pop()
        else if (s[i] === ']' && stack[stack.length - 1] === '[') stack.pop()
        else if (s[i] === '}' && stack[stack.length - 1] === '{') stack.pop()
        else return false
    }
    return !stack.length
        // return true
};
// @lc code=end