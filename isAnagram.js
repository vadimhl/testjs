/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram1 = function(s, t) {
   const tarr=t.split("");
   for ( let i = 0; i<s.length; i++) {
        const f = tarr.indexOf(s[i]);
        if ( f === -1) return false;
        tarr.splice(f, 1);
   }
   return tarr.length===0;
};
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }    
   const map=new Map();
   for ( let i = 0; i<s.length; i++) {
       console.log(`i=${i}  s[i]=${s[i]} t[i]=${t[i]}  gs=${map.get(s[i])} gt=${map.get(t[i])} `);
        map.set( s[i], (map.get(s[i])??0) +1 );
        map.set( t[i], (map.get(t[i])??0) -1 );
        console.log(map);
   }
   console.log(map);
   for ( let cnt of map.values() ) {
       if (cnt) return false
   }
   
   return true;    
};
console.log(isAnagram( "anagram", "nagaram"));