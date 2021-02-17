/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwodel = function(n) {
    if (n<=0) return false;
    while (n>1) {
        const d = Math.trunc(n / 2) ;
        if ( n !== d * 2) return false;
        n = d;
    }
    return true;    
};
var isPowerOfTwo = function(n) {
    if (n<=0) return false;
    if ( n === 1 ) return true;
    let x = 1
    while (x<n) {
        x *= 2;
        if ( n === x ) return true;
    }
    return false;    
};
console.log(isPowerOfTwo(12));