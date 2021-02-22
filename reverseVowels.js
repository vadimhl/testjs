/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    s= s.split('');
    const vowels = new Set(['a','e','i','o','u']);
    let low = 0;
    let high = s.length-1;
    while ( low < high ) {
        while( !vowels.has(s[low]) && low<=high) {
            low++;
        }
        while( !vowels.has(s[high]) && low<=high) {
            high--;
        }
        console.log(`low=${low}  high=${high} `);
        if ( low <= high ) {
            let temp = s[low];
            s[low] = s[high];
            s[high] = temp;
            low++;
            high--;
        }
    }
    return s.join('');

};
console.log(reverseVowels('au'));