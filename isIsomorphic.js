var isIsomorphic = function(s, t) {
    const tabl1 = new Map();
    const tabl2 = new Map();
    for ( let i=0; i<s.length; i++) {
        if ( tabl1.has(s[i]) ) {
            if ( tabl1.get(s[i]) != t[i] ) return false;
            continue;
        } 
        if ( tabl2.has(t[i]) ) {
            if ( tabl2.get(t[i]) != s[i] ) return false;
            continue;
        } 
        tabl1.set( s[i] , t[i]);
        tabl2.set( t[i] , s[i]);
    }
    return true;    
};