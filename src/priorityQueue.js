function priorQ(arr) {
    const firstIndex = 0;
    const lastIndex = arr.length;
    let min = null;
    let minIndex = firstIndex;

    if (lastIndex === 0) {
        return min;
    } else {
        min = arr[minIndex];
        for (let i = firstIndex; i < lastIndex; i++) {
            if (min > arr[i]) {
                minIndex = i;
                min = arr[minIndex];
            }
        }
    }

    
    return min;
};

module.exports = priorQ;
