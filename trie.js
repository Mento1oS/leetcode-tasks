const Node = function () {
    this.children = new Map();
    this.isEnd = false;
}


const Trie = function () {
    this.root = new Node();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let currentNode = this.root;
    for (const letter of word) {
        if(!currentNode.children.has(letter)){
            currentNode.children.set(letter, new Node());
        }
        currentNode = currentNode.children.get(letter);
    }
    currentNode.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let currentNode = this.root;
    for (const letter of word) {
        if(!currentNode.children.has(letter)){
            return false;
        }
        currentNode = currentNode.children.get(letter);
    }
    return currentNode.isEnd;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let currentNode = this.root;
    for (const letter of prefix) {
        if(!currentNode.children.has(letter)){
            return false;
        }
        currentNode = currentNode.children.get(letter);
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */