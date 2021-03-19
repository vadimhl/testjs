function outG (garden) {
    let row ='   ';
    for( let x=0; x<garden.length; x++) {
        row+= x.toString()+' ';
    }
    console.log(row);
    for ( let y=0; y<garden[0].length; y++) {
        let row = (y<10?' ':'')+y.toString()+' ';
        for( let x=0; x<garden.length; x++) {
            row +=garden[x][y]+' ';
        }
        console.log(row);
    }
    }
N=9
const vertex = [
    [1, 5],
    [3, 11],
    [4, 8],
    [5, 11],
    [7, 8],
    [6, 5],
    [4, 8],
    [7, 2],
    [2, 2],
];
const maxX=vertex.reduce( (pre, cur) => Math.max(pre, cur[0]), 0);
const maxY=vertex.reduce( (pre, cur) => Math.max(pre, cur[1]), 0);
const garden = [];
for (let x=0; x<=maxX+1; x++) garden.push(Array(maxY+1));
for( let x=0; x<garden.length; x++) {
    for ( let y=0; y<garden[x].length; y++) {
        garden[x][y]='.';
    }
}
//console.log(garden);
for (let vrt of vertex) {
    garden[vrt[0]][vrt[1]]='#';
}
outG(garden);
const hors = [];
const verts = [];
for (let i=0; i<=maxY; i++) {
    hors.push([]);
}
for (let i=0; i<=maxX; i++) {
    verts.push([]);
}
vertex.push(vertex[0]);
for (let n=1; n<vertex.length; n++) {
    let x0 = vertex[n-1][0];
    let y0 = vertex[n-1][1];
    let x1 = vertex[n][0];
    let y1 = vertex[n][1];
    verts[x0].push(y0);
    for ( let x = Math.min(x0, x1)+1; x<=Math.max(x0, x1)-1; x++) {
        y = y0 + (x-x0)*(y1-y0)/(x1-x0);
        //console.log(`n=${n} x=${x} y=${y}  x0=${x0} x1=${x1} y0=${y0} y1=${y1}`);    
        verts[x].push(y);
    }
    hors[y0].push(x0);
    for ( let y = Math.min(y0, y1)+1; y<=Math.max(y0, y1)-1; y++) {
        x = x0 + (y-y0)*(x1-x0)/(y1-y0);
        hors[y].push(x);
    }
}

for (let x=0 ; x<verts.length; x++) {
    console.log( x+' ---------------------------------------------' );
    verts[x].sort( (a,b)=> a-b);
    console.log( verts[x]);
    if (verts[x].length>1) {
        let cnt=0;
        let xv=0;
        for (let y=0; y<maxY; y++){
            if ( y >=verts[x][xv] ) {
                //console.log(`x=${x} y=${y} cnt=${cnt} xv=${xv} `);
                cnt++;
                xv++;
            }
            if ( cnt % 2 !==0 ) {
                garden[x][y]='f';
            }
        }
    }
    
}
outG(garden);