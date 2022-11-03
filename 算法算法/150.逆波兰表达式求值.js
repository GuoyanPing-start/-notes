/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
// 计算
var calc = function(num1, num2, op) {
    switch (op) {
        case '+':
            return num1 + num2
        case '-':
            return num2 - num1
        case '*':
            return num1 * num2
        case '/':
            let res = num2 / num1
            return res > 0 ? Math.floor(res) : Math.ceil(res)
    }
}

var evalRPN = function(tokens) {
    // 创建栈
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
        // 依次获取字符
        let ch = token[i]
            // +ch转化为数字
        if (isNaN(+ch)) {
            // 栈顶元素转化为数字型，进行计算
            let res = calc(+stack.pop(), +stack.pop(), ch)
                // 计算结果入栈
            stack.push(res)
        } else {
            // 字符进栈
            stack.push(ch)
        }
    }
    // 最后结果位于栈底
    return stack[0]
};
// @lc code=end