const LinkedList = () => {
    let head = null;
    let tail = null;

    const append = (value) => {
        let prevLastNode = tail
        let newNode = Node(value)

        if(prevLastNode)
        {
            prevLastNode.nextNode = newNode
        }

        if (!head)
        {
            head = newNode
        }

        tail = newNode
    }

    const prepend = (value) => {
        let currentHeadNode = head
        let newHeadNode = Node(value)

        if (head) 
        {
            newHeadNode.nextNode = currentHeadNode
        }

        if (!tail)
        {
            tail = newHeadNode
        }

        head = newHeadNode
    }

    const size = () => {
        let count = 0
        let currentNode = head

        if (!head)
        {
            return count
        }

        while (currentNode)
        {
            count++
            currentNode = currentNode.nextNode
        }

        return count
    }

    const getHead = () => {
        return head
    }

    const getTail = () => {
        return tail
    }

    const getSize = () => {
        return size()
    }

    const atIndex = (index) => {
        let count = 0
        let listLength = getSize()
        let currentNode = head

        if (!head)
        {
            return null;
        }

        if (index < 0)
        {
            return null;
        }

        if (index >= listLength)
        {
            return null;
        }

        while (count < index)
        {
            currentNode = currentNode.nextNode
            count++
        }

        return currentNode
    }

    const pop = () => {
        let listLength = size()

        if (listLength == 0)
        {
            return 'No list items'
        }

        if (listLength == 1)
        {
            head = null
            tail = null
            return
        }

        let secondLastNode = atIndex(listLength - 2)
        secondLastNode.nextNode = null
        tail = secondLastNode
    }

    const contains = (value) => {
        let node = head

        while (node)
        {

            if (node.value === value)
            {
                return true
            }

            node = node.nextNode
        }

        return false
    }

    const find = (value) => {
        let count = 0
        let node = head

        while (node)
        {

            if (node.value === value)
            {
                return count
            }

            count++
            node = node.nextNode
        }

        return null
    }

    const toString = () => {
        let node = head
        let string = ''
        const length = size()

        for (let i = 0; i <= length; i++)
        {
            if (i == 0)
            {
                string = `(${node.value}) `
            }
            else
            {
                node = node.nextNode
                let nextNodeValue = node === null ? 'null' : node.value
                string = string + `-> (${nextNodeValue}) `
            }
        }

        return string
    }

    const insertAt = (value, index) => {
        const listLength = getSize()

        if (!head)
        {
            return null;
        }

        if (index > listLength - 1)
        {
            return null;
        }

        if (index < 0)
        {
            return null;
        }

        const newNode = Node(value)
        const currentIndexNode = atIndex(index)

        if (index === 0)
        {
            head = newNode
            head.nextNode = currentIndexNode
        }
        else
        {
            const prevNode = atIndex(index - 1)
            prevNode.nextNode = newNode
            newNode.nextNode = currentIndexNode
        }
    }

    const removeAt = (index) => {
        const listLength = getSize()

        if (listLength === 0)
        {
            return
        }

        if (listLength === 1)
        {
            head = null
            tail = null
            return
        }

        let rightNode = atIndex(index + 1)
        let leftNode = atIndex(index - 1)

        if (index === 0)
        {
            head = rightNode
            return
        }

        if (index === listLength - 1)
        {
            leftNode.nextNode = null
            tail = leftNode
            return
        }

        return leftNode.nextNode = rightNode
    }

    return {
        append,
        prepend,
        getSize,
        atIndex,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt,
        getHead,
        getTail
    }
}

const Node = (value = null, nextNode = null) => {
    return {value, nextNode}
}

const myList = LinkedList()
