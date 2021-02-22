/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct1 = function(ransomNote, magazine) {
    const map = new Map();
    magazine.split('').forEach( el => map.set(el, (map.get(el)??0)+1) );
    for ( let i=0; i<ransomNote.length; i++) {
        if ( map.get(ransomNote[i])>0 ) {
            map.set(ransomNote[i], map.get(ransomNote[i])-1);
        } else {
            return false;
        }
    }
    return true;
};
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const ar=ransomNote.split('');
    ar.sort();
    for ( let i=0; i<ar.length; i++  ) {
        let k = 0;
        let ind = 0;
        do {
            ind = magazine.indexOf(ar[i+k], ind);
            console.log(`1. i=${i}  k=${k} ind=${ind} `);
            if ( ind===-1) return false;
            k++;
            ind++;
            console.log(`2. i=${i}  k=${k} ind=${ind} ar[i]=${ar[i]} ar[k]=${ar[i+k]}`);
        }
        while ( ar[i]===ar[i+k] );
        i = i+k-1;
    }
    return true;
}
console.log(canConstruct("aacc", "aabcdc"));