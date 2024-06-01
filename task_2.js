function findDuplicates(arr) {
    const countMap = {};
    const duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];

        if (countMap[num]) {
            countMap[num]++;
        } else {
            countMap[num] = 1;
        }
    }
    
    for (let num in countMap) {
        if (countMap[num] > 1) {
            duplicates.push(parseInt(num));
        }
    }
    
    return duplicates;
}

const A = [0, 2, 3, 1, 2, 3, 0, 5, 4, 3];
console.log(findDuplicates(A)); 