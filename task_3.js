function isPalindrome(str) {
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    const reversedStr = normalizedStr.split('').reverse().join('');
    
    return normalizedStr === reversedStr;
}

const input1 = "madam";
const input2 = "nitin";
const input3 = "hello";

console.log(isPalindrome(input1)); // Output: true
console.log(isPalindrome(input2)); // Output: true
console.log(isPalindrome(input3)); // Output: false
