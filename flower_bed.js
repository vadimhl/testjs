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
[2, 2],
[7, 4],
[4, 8],
[1, 5],
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
const hors = new Array(maxY+1);
const verts = new Array(maxX+1);
hors.fill([]);
verts.fill([]);
vertex.push(vertex[0]);
for (let n=1; n<vertex.length; n++) {
    let x0 = vertex[n-1][0];
    let y0 = vertex[n-1][1];
    let x1 = vertex[n][0];
    let y1 = vertex[n][1];
    for ( let x = Math.min(x0, x1); x<=Math.max(x0, x1); x++) {
        y = y0 + x0*(y1-y0)/(x1-x0);
        //console.log(`n=${n} x=${x} x0=${x0} x1=${x1}`);
        verts[x].push(y);
    }
    for ( let y = Math.min(y0, y1); y<=Math.max(y0, y1); y++) {
        x = x0 + y0*(x1-x0)/(y1-y0);
        hors[y].push(x);
    }
}
console.log(verts);