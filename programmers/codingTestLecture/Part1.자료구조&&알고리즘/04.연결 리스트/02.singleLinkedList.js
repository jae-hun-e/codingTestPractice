// 각 노드
class Node {
    // 값, 다음 포인터로 구성된 생성자
    constructor(value) {
        console.log("this Node: ", this);
        this.value = value;
        this.next = null;
    }
}

// 단일 연결 리스트 : Node끼리 엮어주는 역할만 할 뿐 값 자체를 가지지 않는다.
class SingleLinkedList {
    // head와 tail포인터로 구성된 생성자
    constructor() {
        console.log("this SingleLinkedList: ", this);
        this.head = null;
        this.tail = null;
    }

    // 요소 찾기
    find(value) {
        let currNode = this.head; //head가 가리키는 Node
        while (currNode.value !== value) {
            currNode = currNode.next; // Node가 가리키는 다음 Node
        }
        return currNode;
    }

    // 마지막에 요소 추가
    append(newValue) {
        const newNode = new Node(newValue); // 추가할 Node 생성
        if (this.head === null) {
            // singleLinkedList에 Node가 한개도 없다는 뜻 이므로 첫번째 Node가 됨
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode; // 기존의 node 의 다음 포인터로 생성한 Node를 연결함
            this.tail = newNode; // singleLinkeList의 tail Node를 생성한 Node로 변경
        }
    }

    // 기존 Node뒤에 요소 추가
    insert(node, newValue) {
        const newNode = new Node(newValue); // 추가할 Node 생성
        newNode.next = node.next; // 생성한 Node의 다음 포인터로 기존Node의 다음 포인터를 넣는다.
        node.next = newNode; // 기존Node의 다음 포인터를 새로 생성한Node를 넣는다.
    }

    // 요소 삭제 : O(n)
    remove(value) {
        // 첫번째 값일 경우
        if (this.head.value === value) {
            his.head = this.head.next;
        } else {
            // 삭제할Node 이전Node 찾기
            let prevNode = this.head;
            while (prevNode.next.value !== value) {
                prevNode = prevNode.next;
            }
            prevNode.next = prevNode.next.next;
        }
    }

    // 출력
    display() {
        let currNode = this.head;
        let displayString = "[";
        while (currNode !== null) {
            displayString += `${currNode.value}, `;
            currNode = currNode.next;
        }

        displayString = displayString.substring(0, displayString.length - 2 + 1);
        displayString += "]";
        console.log(displayString);
    }
}

// test
const linkeList = new SingleLinkedList();
linkeList.append(1);
linkeList.append(2);
linkeList.append(3);
linkeList.append(5);
linkeList.display();
console.log(linkeList.find(3));
linkeList.remove(3);
linkeList.display();
linkeList.insert(linkeList.find(2), 10);
linkeList.display();
