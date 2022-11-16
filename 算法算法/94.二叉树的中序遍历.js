/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

const { registerRuntimeHelpers } = require("@vue/compiler-core");

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
// 1. 递归 LDR
var inorderTraversal = function(root) {
    // 数组
    const res = [];
    const inOrder = root => {
        // 判根空
        if (!root) {
            return;
        }
        inOrder(root.left);
        res.push(root.val);
        inOrder(root.right);
    };
    inOrder(root);
    return res;
};
// 2.非递归，迭代 LDR
var inorderTraversal = function(root) {
        // 结果的数组
        const res = [];
        const stack = [];
        let cur = root;
        if (!root) {
            return res;
        }
        do {
            if (cur) {
                stack.push(cur);
                cur = cur.left;
            } else {
                cur = stack.pop();
                res.push(cur.val);
                cur = cur.right;
            }
        } while (stack.length || cur);
        return res;
    }
    // @lc code=end