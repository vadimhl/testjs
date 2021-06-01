const max=10000;
for ( let x =  1; x<=max; x++ ) {
    for ( let y =  1; y<=max; y++ ) {
        for ( let z =  1; z<=max; z++ ) {
            if ( x/(y+z)+y/(x+z)+z/(x+y)=== 4 ) {
                console.log(`x=${x} y=${y} z=${z}`);
            }
        }
    }
}