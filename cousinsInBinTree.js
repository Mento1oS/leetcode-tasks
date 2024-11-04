function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const QueueNode = function (node) {
    this.val = node;
    this.prev = null;
    this.next = null;
}

const Q = function () {
    this.first = null;
    this.last = null;
    this.size = 0;
}

Q.prototype.add = function (node) {
    const newNode = new QueueNode(node);
    if (this.size) {
        const prevLast = this.last;
        prevLast.next = newNode;
        newNode.prev = prevLast;
        this.last = newNode;
    } else {
        this.last = newNode;
        this.first = newNode;
    }
    this.size++;
}

Q.prototype.shift = function () {
    if (this.size) {
        const prevFirst = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            const newFirst = prevFirst.next;
            newFirst.prev = null;
            this.first = newFirst;
        }
        this.size--;
        return prevFirst.val;
    } else {
        return null;
    }
}


/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const replaceValueInTree = function (root) {
    const q = new Q();
    q.add(root);
    let kidsSum = 0;
    let oldKidsSum = 0;
    let stage = 0;
    while (q.size) {
        const collection = new Q();
        const size = q.size;
        if (stage === 0 || stage === 1) {
            for (let i = 0; i < size; i++) {
                const elem = q.shift();
                elem.val = 0;
                const rightKid = elem.right;
                const leftKid = elem.left;
                const rightKidVal = rightKid ? rightKid.val : 0;
                const leftKidVal = leftKid ? leftKid.val : 0;
                const siblingSum = rightKidVal + leftKidVal;
                kidsSum += siblingSum;
                if (leftKid) {
                    leftKid.val = -siblingSum;
                    collection.add(leftKid);
                }
                if (rightKid) {
                    rightKid.val = -siblingSum;
                    collection.add(rightKid);
                }
            }
        } else {
            for (let i = 0; i < size; i++) {
                const elem = q.shift();
                elem.val += oldKidsSum;
                const rightKid = elem.right;
                const leftKid = elem.left;
                const rightKidVal = rightKid ? rightKid.val : 0;
                const leftKidVal = leftKid ? leftKid.val : 0;
                const siblingSum = rightKidVal + leftKidVal;
                kidsSum += siblingSum;
                if (leftKid) {
                    leftKid.val = -siblingSum;
                    collection.add(leftKid);
                }
                if (rightKid) {
                    rightKid.val = -siblingSum;
                    collection.add(rightKid);
                }
            }
        }
        const colSize = collection.size;
        for (let i = 0; i < colSize; i++) {
            const elem = collection.shift();
            q.add(elem);
        }
        oldKidsSum = kidsSum;
        kidsSum = 0;
        stage++;
    }
    return root;
};