/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    for (let ln=Math.floor(s.length/2); ln>=1; ln--) {
        let math=true;
        if ( s.length % ln === 0) {
            for (let letter = 0; letter < ln; letter++) {
                for (let n = 1; n<s.length/ln ; n++ ) {
                    if ( s[letter] !== s[letter+n*ln] )  {
                        math=false; 
                        break;
                    }
                }
                if (!math) break;
            }
        } else {continue}
        if (math) return true;
    }
    return false;
};
console.log(repeatedSubstringPattern('ababab'));