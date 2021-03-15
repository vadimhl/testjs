function test2 (a, b, d) {
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
function test1 ( b, d ) {
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
    console.log('n=%s', n);
    return;
    for ( let i=a; i<=b; i++) {
        console.log(i, seq[i % n]) ;
        //if (seq[i % n]===0) {
            //console.log(i);
        //}
    }
    let sum=0;
    for (let i=a; i<=b; i++) {
        sum += seq[ i % n];
        console.log(i, sum, seq[ i % n]);
    }

    console.log(sum, n, seq);
}
function getn ( b, d ) {
    if ( d === 2) return 3;
    let p1=1;
    let p2=1;
    let fi=1;
    for (let i=3; i<=b; i++) {
        fi = (p1 +p2) % d;
        if ( fi===1 && p2===1 && p1===0 ) {
            return i-2;
        }
        p1=p2;
        p2=fi;
    } 
    return 0;
}

function test (a, b, d) {
    if (d===1) return true;
    let n = getn(b,d);
    console.log('n=%s', n);
    let map = new Map();
    let min = Infinity;
    let max = 0;
    for (let i=a; i<=b; i++) {
        let r = i;
        if (n>0) {
            r = i % n;
        } 
        min = Math.min(min, r);
        max = Math.max(max, r);
        if ( map.has(r) ) { 
            map.set( r, map.get(r)+1 );
        } else {
            map.set( r, 1) ;
        }    }
    
    console.log(min,max, map);
    let p1=0;
    let p2=1;
    let fi=1;
    let sum = min<2?map.get(1):0;
    for (let i=2; i<=max; i++) {
        fi = (p1 +p2) % d;
        p1=p2;
        p2=fi;
        if (i>=min && map.has(i)) {
            sum += fi* map.get(i);
            console.log('i=%s fi=%s map(i)=%s sum=%s', i, fi, map.get(i), sum);
        }
    } 
    return sum % d ===0;
}
console.log(test( 1000000000, 1000000000 , 5 ));
//test1(  987654321, 6493915 );
//console.log(getn(  987654321, 6493915 ));
