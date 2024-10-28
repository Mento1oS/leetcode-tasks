function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const flipEquiv = function (root1, root2) {
    let fail = false;
    const dfs = (node1, node2) => {
        // console.log(node2, node1)
        const rightKid1 = node1.right;
        const rightKid2 = node2.right;
        const leftKid1 = node1.left;
        const leftKid2 = node2.left;
        // const arr = [rightKid1, rightKid1, rightKid1, rightKid1];
        let flippable1 = true;
        let flippable2 = true;
        let cnt = 0;
        // for (let i = 0; i < 4; i++) {
        //     if(arr[i].val){
        //         flip
        //     }
        // }

        if ((rightKid1 && leftKid2 ? rightKid1.val && leftKid2.val ? rightKid1.val === leftKid2.val : false : rightKid1 === leftKid2) && (rightKid2 && leftKid1 ? rightKid2.val && leftKid1.val ? rightKid2.val === leftKid1.val : false : rightKid2 === leftKid1)) {

            if (rightKid1 && rightKid1.val) {
                dfs(rightKid1, leftKid2);
            }
            if (leftKid1 && leftKid1.val) {
                dfs(leftKid1, rightKid2);
            }
        } else {
            flippable1 = false;
        }
        if ((rightKid1 && rightKid2 ? rightKid1.val && rightKid2.val ? rightKid1.val === rightKid2.val : false : rightKid1 === rightKid2) && (leftKid2 && leftKid1 ? leftKid2.val && leftKid1.val ? leftKid2.val === leftKid1.val : false : leftKid2 === leftKid1)) {
            if (rightKid1 && rightKid1.val) {
                dfs(rightKid1, rightKid2);
            }
            if (leftKid1 && leftKid1.val) {
                dfs(leftKid2, leftKid1);
            }
        } else {
            flippable2 = false;
        }
        // console.log(flippable1, flippable2);
        if (fail === false) {
            fail = !(flippable1 || flippable2);
        }
    }

    if (root1 && root2) {
        if (root2.val === root1.val) {
            dfs(root1, root2);
            return !fail;
        } else {
            return false;
        }
    } else {
        return (!root1 && !root2);
    }
};

const rightEight = new TreeNode(8);
const leftEight = new TreeNode(8);

const rightSeven = new TreeNode(7);
const leftSeven = new TreeNode(7);

const rightSix = new TreeNode(6);
const leftSix = new TreeNode(6);

const rightFive = new TreeNode(5, rightEight, rightSeven);
const leftFive = new TreeNode(5, leftSeven, leftEight);

const rightFour = new TreeNode(4);
const leftFour = new TreeNode(4);

const rightThree = new TreeNode(3, rightSix);
const leftThree = new TreeNode(3, leftSix);

const rightTwo = new TreeNode(2, rightFour, rightFive);
const leftTwo = new TreeNode(2, leftFour, leftFive);

const rightRoot = new TreeNode(1, rightTwo, rightThree);
const leftRoot = new TreeNode(1, leftTwo, leftThree);

console.log(flipEquiv(rightRoot, leftRoot));

const rightOne = new TreeNode(1);
const leftOne = new TreeNode(1);

const rootLeft = new TreeNode(0, null, rightOne);
const rootRight = new TreeNode(0, leftOne);

console.log(flipEquiv(rootLeft, rootRight));


const rightTwo3 = new TreeNode(2);
const leftTwo3 = new TreeNode(2);

const rightThree3 = new TreeNode(3, rightTwo3);
const leftThree3 = new TreeNode(3);

const rightOne3 = new TreeNode(1);
const leftOne3 = new TreeNode(1, leftTwo3);

const rootRight3 = new TreeNode(0, rightThree3, rightOne3);
const rootLeft3 = new TreeNode(0, leftThree3, leftOne3);

console.log(flipEquiv(rootLeft3, rootRight3));