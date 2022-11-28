/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
// 递归
var hasPathSum = function(root, targetSum) {
    // 判根空
    if (!root) {
        return false
    }
    // 叶子结点是否等与被减数
    if (root.left === null && root.right === null) {
        return (targetSum - root.val) === 0
    }
    // 获取目标值与最后减得值
    var left = hasPathSum(root.left, targetSum - root.val)
    var right = hasPathSum(root.right, targetSum - root.val)
        // 只要有一个叶子结点是真就
    return left || right
};
// @lc code=end