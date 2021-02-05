/**
 * @param {number} numRows
 * @return {number[][]}
 */
var getRow = function(numRows) {
   if (numRows == 0 ) return [1];
   if (numRows == 1 ) return [1,1];
   let currow = 2;
   let rez = [];
   let pre = [1,1];
   while ( currow <= numRows ) {
       rez[0] = 1;
       rez[currow] = 1;
       //console.log(`pre = ${pre}`);
       for ( let i = 1; i <= (currow >> 1); i++) {
           //console.log(` currow=${currow} i=${i}  pre[i]=${pre[i]} pre[i+1]=${pre[i+1]} pre = ${pre}`);
           rez[i] = pre[i] + pre[i-1];
           rez[currow-i] = rez[i] ;
       }
       currow++;
       //console.log(pre);
       pre = [...rez];
   }
   return rez;
};
let rez = getRow(5);
console.log(rez);
//         1
//       1   1
//     1   2   1
//   1   3   3   1
// 1   4   6   4   1