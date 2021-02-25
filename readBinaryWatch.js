/**
 * @param {number} num 
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    let bitsIn = function(n) {
        const pw2 = [1, 2, 4, 8, 16, 32];
        let nbits = 0;
        let p=5;
        while ( n > 0 ) {
            if ( n >= pw2[p] ) {
                nbits++;
                n -= pw2[p];
            }
            p--;
        }
        return nbits;
    }
    if ( num === 0 )  return ["0:00"];
    res = [];
    for ( let hb = 0; hb <= num && hb<5 ; hb++) {
        let hr= [];
        let mn= [];
        let mb = num-hb;
        console.log(`h=${hb}  m=${mb}`);
        for ( let i=0; i<60; i++) {
            let nb = bitsIn(i);
            if ( nb===hb && i<12) hr.push(i);
            if ( nb===mb ) mn.push(i);
        }
        console.log(`h=${hr}  m=${mn}`);
        for ( let h of hr ) {
            for (let m of mn ) {
                res.push(h+":"+(m>9?m:'0'+m));
            }
        }
    }
    return res;
    
};
console.log(readBinaryWatch(2));
//console.log(bitsIn(0));