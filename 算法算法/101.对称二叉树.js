/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

const { checkCompatEnabled } = require("@vue/compiler-core");

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
 * @return {boolean}
 */
// 对称二叉树判断，返回值1对称，0非对称
var isSymmetric = function(root) {
    // 根节点为空，1
    if (!root) {
        return 1;
    }
    return check(root, root)
};
var check = (A, B) => {
        // A和B均为空，叶子结点，1
        if (!A && !B) {
            return 1;
        }
        // 当前节点只有一个结点，表示两个子节点值不同，0
        if (!A || !B) {
            return 0;
        }
        // 左右子节点的值相等并且左子树的左节点与右子树的右节点相等，左子树的右节点与右子树的左节点相等
        return A.val === B.val &&
            check(A.left, B.right) &&
            check(A.right, B.left)
    }
    // @lc code=end