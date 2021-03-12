function test (a, b, d) {
    let p1=0;
    let p2=1;
    let fi=1;
    let sumf=0;
    for ( let i=2; i<=b; i++) {
        fi = p1 +p2;
        if ( i >= a) {
            sumf += fi;
        }
        p1=p2;
        p2=fi;
    }
    console.log(sumf);
    return sumf % d === 0;
}
function test1 (a, d ) {
    let seq = [];
    let p1=1;
    let p2=1;
    seq.push(0);
    seq.push(1);
    seq.push(1);
    let fi=1;
    let i=2; 
    do {
        i++;
        fi = (p1 +p2) % d;
        seq.push(fi);
        p1=p2;
        p2=fi;
    } while ( ! ( seq[i]===1 && seq[i-1]===1 && seq[i-2]===0) );
    n=seq.length-3;
    console.log(n, seq);
}

test1( 99, 13);