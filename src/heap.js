class Heap {
    heap = [];

    pushMultipleItems(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.pushItem(arr[i]);
        }        
        return this.heap;
    }

    pushItem(item) {
        let currentId = this.heap.length;
        while (parentOf(currentId) >= 0 && this.heap[parentOf(currentId)] > item) {
            this.heap[currentId] = this.heap[parentOf(currentId)];
            currentId = parentOf(currentId);
        }        
        this.heap[currentId] = item;
        return this.heap;
    }

    popItem() {
        let result = this.heap[0];
        let childId = 0;
        let parentId = 0;
        
        while ((this.heap[leftChildOf(parentId)] != undefined)) {
            if ((this.heap[rightChildOf(parentId)] != undefined)) {
                childId = 
                    (this.heap[leftChildOf(parentId)] < this.heap[rightChildOf(parentId)]) 
                    ? leftChildOf(parentId)
                    : rightChildOf(parentId);
            } else {
                childId = leftChildOf(parentId);
            }
            this.heap[parentId] = this.heap[childId];
            parentId = childId;
        }
        
        const lastValue = this.heap[this.heap.length-1];
        let missingId = childId;

        while (this.heap[parentOf(missingId)] > lastValue) {
            this.heap[missingId] = this.heap[parentOf(missingId)];
            missingId = parentOf(missingId);
        }
        this.heap[missingId] = lastValue;
        
        this.heap.pop();
        return result;
    }

    isEmpty() {
        return this.heap.length == 0;
    }
}


function parentOf(i) {
    let parent = Math.ceil(i/2) - 1;
    return parent;
}


function leftChildOf(i) {
    let left = 2 * i + 1;
    return left;
}

function rightChildOf(i) {
    let right = 2 * i + 2;
    return right;
}

module.exports = Heap;