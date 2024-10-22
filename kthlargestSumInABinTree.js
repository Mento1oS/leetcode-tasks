function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthLargestLevelSum = function (root, k) {
    const sums = [];
    const dfs = (elem, level) => {
        const rightChild = elem.right;
        const leftChild = elem.left;
        if (leftChild) {
            sums[level] = sums[level] ? sums[level] + leftChild.val : leftChild.val;
            dfs(leftChild, level + 1);
        }
        if (rightChild) {
            sums[level] = sums[level] ? sums[level] + rightChild.val : rightChild.val;
            dfs(rightChild, level + 1);
        }
    }
    sums[0] = root.val;
    dfs(root, 1);
    if(k>=sums.length) return -1;
    return sums.sort((a, b) => b - a)[k-1];
};