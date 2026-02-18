class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Dequeue {
    constructor() {
        this.size = 0;
        this.last = null;
        this.first = null;
    }

    empty() {
        return this.size === 0;
    }

    pop() {
        if (this.empty()) return undefined;

        const last = this.last;

        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            const newLast = this.last.left;
            newLast.right = null;
            this.last = newLast;
        }

        this.size--;

        return last.val;
    }

    push(val) {
        const node = new Node(val);

        if (this.size === 0) {
            this.first = node;
        } else {
            const pastLast = this.last;
            pastLast.right = node;
            node.left = pastLast;
        }

        this.last = node;
        this.size++;
    }

    shift() {
        if (this.empty()) return undefined;

        const first = this.first;

        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            const newFirst = this.first.right;
            newFirst.left = null;
            this.first = newFirst;
        }

        this.size--;
        return first.val;
    }

    unshift(val) {
        const node = new Node(val);

        if (this.size === 0) {
            this.last = node;
        } else {
            const pastFirst = this.first;
            pastFirst.left = node;
            node.right = pastFirst;
        }

        this.first = node;
        this.size++;
    }
}

const parseFeatureTree = (featureTree) => {
    const features = [];

    const hash = {};

    const D = new Dequeue();

    Object.entries(featureTree.features)
        .forEach(([key, value]) => {
            if (key === 'enabled') return;

            if (featureTree.features[key].enabled === false) return;

            D.push(key);
            hash[key] = value;
        });

    while (D.size) {
        const node = D.shift();

        if (hash[node].enabled || !Object.keys(hash[node]).length) {
            features.push(node);
        }

        Object.entries(hash[node])
            .forEach(([key, value]) => {
                if (key === 'enabled') return;

                if (hash[node][key].enabled === false) return;

                const name = `${node}.${key}`;

                D.push(name);
                hash[name] = value;
            });
    }

    return features;
};
