// 각 노드
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// 부모보다 작으면 left
// 부모보다 크면 right
class BinarySearchTree {
    constructor() {
        this.root = null; // 초기값 null
    }

    // 추가(정렬해서)
    insert(value) {
        const newNode = new Node(value);

        // root가 비어있으면 넣어줌(첫번째 추가)
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        // 그 이후 추가
        let currentNode = this.root;
        // 마지막까지 돌면 종료
        while (currentNode !== null) {
            // 추가 된 값이 root 보다 클 경우
            if (currentNode.value < value) {
                // right가 없을 경우 추가
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    break;
                }
                // right가 있을 경우 right로 이동
                currentNode = currentNode.right;
            }
            // 추가 된 값이 root 보다 작을
            else {
                // left가 없을 경우 추가
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    break;
                }
                // left가 있을 경우 이동
                currentNode = currentNode.left;
            }
        }
    }

    // 탐색
    has(findValue) {
        // root부터 시작
        let currentNode = this.root;
        // 끝까지 돌면 종료
        while (currentNode != null) {
            // findValue 찾으면 종료
            if (currentNode.value === findValue) return true;
            // findVlaue가 더 크면 rifht로 이동
            if (currentNode.value < findValue) currentNode = currentNode.right;
            // fiindValue가 더 작으면 left로 이동
            else currentNode = currentNode.left;
        }
        return false;
    }
}

const tree = new BinarySearchTree();

tree.insert(5);
console.log(tree);
tree.insert(4);
console.log(tree);
tree.insert(7);
console.log(tree);
tree.insert(8);
console.log(tree);
tree.insert(2);
console.log(tree);
tree.insert(9);
console.log(tree);
console.log(tree.has(9));
console.log(tree.has(1));
console.log(tree.has(2));
