function maximumSum(A) {
    let map = new Map();
    let sum = 0;

    for (let i = 0; i < A.length; i++) {
        let mapIndex = Math.floor(A[i] / 10) + A[i] % 10;
        if (map.has(mapIndex)) {
            sum = Math.max(sum, A[map.get(mapIndex)] + A[i]);
        }
        else {
            map.set(mapIndex, i);
        }
    }
    if (sum == 0) {
        return -1;
    } else {
        return sum;
    }
}