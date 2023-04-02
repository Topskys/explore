/**
 * 单向链表
 * 01 node + head + null
 * 02 head ---> null
 * size
 * next element
 * 增 删 改 查
 */
class Node {
    constructor(element, next) {
        this.element = element
        this.next = next
    }
}

class LinkedList {
    constructor(head, size) {
        this.head = null
        this.size = size || 0
    }

    _getNode(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('cross the border')
        }
        let currentNode = this.head
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next
        }
        return currentNode
    }

    add(index, element) {
        if (arguments.length === 1) {
            element = index
            index = this.size
        }
        if (index < 0 || index > this.size) {
            throw new Error('cross the border')
        }
        if (index === 0) {
            let head = this.head
            this.head = new Node(element, head)
        } else {
            let prevNode = this._getNode(index - 1)
            prevNode.next = new Node(element, prevNode.next)
        }
        this.size++
    }

    del(index) {
        let rmNode = null
        if (index === 0) {
            rmNode = this.head
            if (!rmNode) return undefined
            this.head = rmNode.next
        } else {
            let prevNode = this._getNode(index - 1)
            rmNode = prevNode.next
            prevNode.next = rmNode.next
        }
        this.size--
        return rmNode
    }

    set(index, element) {
        let node = this._getNode(index)
        node.element = element
    }

    get(index) {
        return this._getNode(index)
    }

    clear() {
        this.head = null
        this.size = 0
    }
}

//const l1 = new LinkedList()
//l1.add('node1')
//l1.add('node2')
//l1.add(1, 'node3')
//l1.del(1)
//l1.set(1, 'node4')
//l1.get(0)
//l1.clear()
//console.log(JSON.stringify(l1))


/**
 * 单向链表队列
 */
class Queue {
    constructor() {
        this.linkedList = new LinkedList()
    }

    enter(data) {
        this.linkedList.add(data)
    }

    out() {
        return this.linkedList.del(0)
    }
}

//const q = new Queue()
//q.enter('node1')
//q.enter('node2')
//let a=q.out()
//a=q.out()
//a=q.out() // undefined
//
//console.log(a)


module.exports=Queue