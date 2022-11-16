/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
// 1.递归
var preorderTraversal = function(root) {
    const answer = [];
    const traversal = (node, arr) => {
        // 递归参数，返回值
        // 递归退出
        if (!node) return;
        arr.push(node.val);
        traversal(node.left, answer);
        traversal(node.right, answer);
    }
    traversal(root, answer);
    return answer;
};
// 2.迭代,非递归
// 算法：两个数组，入栈根，入栈右左，出栈变为左右，
var preorderTraversal = function(root) {
        // 数组，存储结果
        const answer = [];
        // 栈
        const stack = [];
        if (!root) {
            return answer;
        }
        // 根节点入栈
        stack.push(root);
        while (stack.length) {
            // 右左结点出栈
            const cur = stack.pop();
            // 变为左右结点入数组
            answer.push(cur.val)
                // 右左结点入栈操作
            if (cur.right) {
                stack.push(cur.right);
            }
            if (cur.left) {
                stack.push(cur.left);
            }
        }
        // 结果返回值
        return answer;
    }
    // @lc code=end