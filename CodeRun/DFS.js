const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

function Node(value) {
    this.children = new Set();
    this.value = value;
    this.marked = false;
}

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const [data, ...arrays] = input.map(elem => elem.split(' ').map(Number));
    const [edges, sides] = data;
    const graph = new Map();
    for (let i = 0; i < arrays.length; i++) {
        const [aSide, bSide] = arrays[i];
        if (!graph.has(aSide)) {
            const node = new Node(aSide);
            node.children.add(bSide);
            graph.set(aSide, node);
        } else {
            const node = graph.get(aSide);
            node.children.add(bSide);
            graph.set(aSide, node);
        }
        if (!graph.has(bSide)) {
            const node = new Node(bSide);
            node.children.add(aSide);
            graph.set(bSide, node);
        } else {
            const node = graph.get(bSide);
            node.children.add(aSide);
            graph.set(bSide, node);
        }
    }
    let count = 0;
    const keys = [];

    function dfs(node) {
        node.marked = true;
        count++;
        keys[node.value] = 1;
        node.children.forEach(nodeTitle => {
            const newNode = graph.get(nodeTitle);
            if (!newNode.marked) {
                dfs(newNode);
            }
        })
    }

    if (graph.has(1)) {
        dfs(graph.get(1));
    }

    const resultingList = [];
    for (const keysKey in keys) {
        resultingList.push(keysKey);
    }

    if (resultingList.length) {
        console.log(count);
        console.log(...resultingList)
    } else {
        console.log(1);
        console.log(1);
    }
});