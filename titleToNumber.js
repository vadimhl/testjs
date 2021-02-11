var titleToNumber = function(s) {
    let base = 1;
    let rez = 0;
    for ( let i = s.length-1; i >=0; i--) {
        rez += base * (s.codePointAt(i) -64 );
        base *= 26;
    }
    return rez;
};
console.log(titleToNumber(''));