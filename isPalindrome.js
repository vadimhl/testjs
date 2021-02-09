/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let arr=s.toLowerCase().split('').filter( (s)=> (s>='a' && s<='z') || (s>='0' && s<='9') );
    console.log(arr,  arr.length ,(arr.length >> 2) +1);
    
    for (let i=0; i< (arr.length >> 1) +1; i++) {
        console.log(`i=${i} arr.length-1=${arr.length-1-i} ${arr[i]}  ${arr[ arr.length-1-i]}`)
        if (arr[i] !== arr[ arr.length-1-i]) return false;
    }
    return true;
};
console.log(isPalindrome("F"));
