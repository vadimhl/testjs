var countPrimes = function(n) {
    const re = new Array(n);
    let i = 2;
    while ( i < n  ) {
        //console.log(`1 i=${i}`);
        re[i] = true;
        for ( let j=i+i; j < n; j+=i ) {
            //console.log(`2 i=${i} j=${j}`);
            re[j] = false;
        }
        do {
            i++;
            //console.log(`3 i=${i}`);
        } while ( re[i]===false && i < n  )

    }
    let rez= 0;
    for ( let i=0; i<re.length; i++) {
        //onsole.log(`i=${i}   ${re[i]}`  );
        if (re[i]) rez++;
    }
    return rez;
};
console.log(countPrimes(200000));