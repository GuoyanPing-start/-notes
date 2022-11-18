/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
d
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root == null) {
        return [];
    }
    const Queue = []; //存放节点
    const Answer = []; //二维数组
    Queue.push(root);
    while (Queue.length) {
        const temp = [];
        const size = Queue.length;
        for (let i = 0; i < size; i++) {
            const node = Queue.shift(); //取队列的第一个元素
            // 节点入队列
            temp.push(node.val);
            // 左子树非空则左子树入队
            if (node.left != null) {
                Queue.push(node.left);
            }
            // 右子树非空则右节点入队
            if (node.right != null) {
                Queue.push(node.right);
            }
        }
        Answer.push(temp);
    }
    return Answer;
};
// @lc code=end