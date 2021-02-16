var isHappy = function(n) {
    let set = new Set([n]);
    while ( n > 1  ) {
        console.log(set);
        let rez = 0;
        while ( n ) {
            let d = n % 10;
            rez += d*d;
            n = ( n - d ) /10;
        }
        if ( set.has(rez) ) return false;
        set.add(rez);
        n = rez;
    }
    return true;
};
console.log(isHappy(89));