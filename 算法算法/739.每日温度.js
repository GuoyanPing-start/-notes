/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    // 获取温度门的长度
    let n = temperatures.length
        // 创建一个和该温度数一样长的数组
    let res = new Array(n).fill(0)
        // 创建一个栈
    stack = [0]
        // 遍历温度数组
    for (let i = 0; i < n; i++) {
        // 若本日温度大于最高温度【栈顶元素】
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            // 栈顶出栈
            const top = stack.pop()
                //  计算差值，  下标差值放入一个数组
            res[top] = i - top
        }
        // 栈为空 或 每日温度小于等于栈顶温度 ，直接入展
        stack.push(i)
    }
    return res;
};
// @lc code=end