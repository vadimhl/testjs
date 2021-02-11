var trailingZeroes = function(n) {
    let zers = 0;
    let base = 5;
    while ( n >= base ) {
        zers += Math.trunc( n / base);
        base *=5;
    }
    return zers;
};
console.log(trailingZeroes(10));