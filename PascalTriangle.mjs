/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
   let rez =  [];
   if (numRows == 0 ) return rez;
   rez[1] = [1];
   let currow = 1;
   while ( currow < numRows ) {
       //let next = currow+1;
       rez [currow] = [1];
       rez [currow][currow] = 1;
       console.log( `--- currow=${currow} cr2=${currow >> 1} `);
       for ( let i = 1; i <= (currow >> 1); i++) {
        console.log( `currow=${currow} cr2=${currow >> 1}  i=${i}`);
        rez [currow][i] = i;
            rez [currow][currow-i] = i;
       }
       currow++;
   }
   return rez;

};
let rez = generate(5);
console.log(rez);
//         1
//       1   1
//     1   2   1
//   1   3   3   1
// 1   4   6   4   1