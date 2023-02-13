class Node {
    constructor(value = "") {
        this.value = value;
        this.children = new Map();
    }
}

class Trie {
    constructor() {
        this.root = new Node(); // 루트로 빈 노드 생성
    }

    // 문자열 추가
    insert(string) {
        // 탐색을 위해 root부터 시작
        let currentNode = this.root;

        // 한글자씩 짜름
        for (const char of string) {
            if (!currentNode.children.has(char)) {
                // 자른 문자를 간선으로 가지고 있지 않다면 추가
                currentNode.children.set(char, new Node(currentNode.value + char));
            }
            // 다음 정점으로 이동
            currentNode = currentNode.children.get(char);
        }
    }

    // 문자열 존재여부 확인
    has(string) {
        let currentNode = this.root;

        for (const char of string) {
            if (!currentNode.children.has(char)) return false;

            currentNode = currentNode.children.get(char);
        }

        return true;
    }
}

const trie = new Trie();
trie.insert("cat");
trie.insert("can");
console.log(trie.has("cat")); // true
console.log(trie.has("can")); // true
console.log(trie.has("cap")); // false
