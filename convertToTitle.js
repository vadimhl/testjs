var convertToTitle = function(n) {
    let rez='';
    while ( n >= 1 ) {
        let ch = n % 26;
        if ( ch ==0 ) ch=26;
        //
        rez = String.fromCodePoint("A".codePointAt(0)-1+ch)+rez;
        n = (n-ch)/26;
    }
    //rez = String.fromCodePoint("A".codePointAt(0)-1+n)+rez;
    return rez;
};
console.log(convertToTitle(52));