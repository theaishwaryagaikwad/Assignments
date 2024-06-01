function PairSum(arr, x) {

    const seen = new Set();

    for (let i = 0; i < arr.length; i++) {
        const complement = x - arr[i];

        if (seen.has(complement)) {
            return true;
        }
        
        seen.add(arr[i]);
    }

    return false;
}

const A = [1, 5, 45, 10, 8]
const x = 11
console.log(PairSum(A,x));