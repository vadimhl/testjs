var convertToTitle = function(n) {
    let rez='';
    let codeA="A".codePointAt(0)-1;
    while ( n >= 1 ) {
        let ch = n % 26;
        if ( ch ==0 ) ch=26;
        rez = String.fromCodePoint(codeA+ch)+rez;
        n = (n-ch)/26;
    }
    return rez;
};
console.log(convertToTitle(52));