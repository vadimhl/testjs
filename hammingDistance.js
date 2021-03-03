/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let x2;
    let y2;
    if ( x > y ) {
        x2=x.toString(2);
        y2=y.toString(2);
    } else {
        x2=y.toString(2);
        y2=x.toString(2);
    }
    const lenx=x2.length;
    const leny=y2.length;
    let res = 0;
    for (let i = 0 ; i<leny; i++) {
        if ( x2[lenx-1-i]!==y2[leny-1-i]) res++;
    }
    for (let i = 0; i<lenx-leny; i++) {
        if (x2[i]==='1') res++;
    }
    return res;
};
console.log(hammingDistance( 1,4));