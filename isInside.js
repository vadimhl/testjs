function isInside(a, b) {
    let count = 0;
    const x0 = b[0];
    const y0 = b[1];    
    a.push([a[0][0], a[0][1]]);
    a.push([a[1][0], a[1][1]]);

    for ( let i = 1; i<a.length-1; i++ ) {
        const [x1, y1] = a[i-1];
        const [x2, y2] = a[i];        
        const [x3, y3] = a[i+1];
        if ( (x0===x1 && y0===y1) || (x0===x2 && y0===y2) || 
             ( x0===x1 && x0===x2 &&  Math.min(y1,y2) < y0 && y0 < Math.max(y1,y2) )|| 
             ( y0===y1 && y0===y2 &&  Math.min(x1,x2) < x0 && x0 < Math.max(x1,x2) ) ) {
            console.log(`tr x1=${x1} y1=${y1} x2=${x2} y2=${y2} x0=${x0} y0=${y0}  `);
            return true;
        }
        if ( x2 === x0 && y2 > y0 ) {
            if ( Math.min(x1, x3) < x0 && x0 < Math.max(x1, x3) ) {
                count++;
                console.log(`x1=${x1} y1=${y1} x2=${x2} y2=${y2} x0=${x0} y0=${y0} x3=${x3} y3=${y3} count=${count} `);
            }
        }
        if ( (x1 < x0 && x0 < x2) || (x2 < x0 && x0 < x1)) {
            let y = y1 + (y2-y1)/(x2-x1)*(x0-x1);
            if ( y === y0) return true;
            if ( y > y0) count++;
            console.log(`x1=${x1} y1=${y1} x2=${x2} y2=${y2} x0=${x0} y0=${y0} y=${y} count=${count} `);
        }
    }
    console.log(`end count=${count}`);
    return count % 2 === 1;
}
console.log(
    //isInside([[1, 1], [4, 1], [2, 3]], [3, 2])
    //isInside([[1, 1], [4, 1], [2, 3]], [3, 2])
    isInside([[1,1],[1,3],[2,4],[4,4],[4,3],[2,1]],[3,1])
    //isInside([[1, 1], [3, 2],        [5, 1],        [4, 3],        [5, 5],        [3, 4],        [1, 5],        [2, 3]],       [3, 3])
);
