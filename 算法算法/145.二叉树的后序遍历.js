/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
// 1.递归LRD
// var postorderTraversal = function(root) {
//     const res = [];
//     const postOrder = root => {
//         if (!root) {
//             return;
//         }
//         postOrder(root.left);
//         postOrder(root.right);
//         res.push(root.val);
//     };
//     postOrder(root);
//     return res;
// };
// 2.非递归LRD  DEBCA
var postorderTraversal = function(root) {
    // 存结果的数组
    const res = [];
    const stack = [];
    let pre = null;
    // 根非空
    while (stack.length > 0 || root != null) {
        while (root) {
            // 最左子树DEB
            stack.push(root);
            root = root.left;
        }
        // 根节点指向栈顶，1.左E 2.根指向双亲弹出B 3.
        root = stack.pop();
        // 右子树作为判断条件，空则该节点入结果数组，否则进入右子树
        if (root.right === null || pre.right === pre) {
            res.push(root.val);
            pre = root;
            root = null;
        } else {
            stack.push(root);
            root = root.right;
        }
    }
    return res;
};
// @lc code=end