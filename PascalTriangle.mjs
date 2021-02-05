/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
   let rez =  [];
   if (numRows == 0 ) return rez;
   rez[0] = [1];
   let currow = 1;
   while ( currow < numRows ) {
       rez [currow] = [1];
       rez [currow][currow] = 1;
       for ( let i = 1; i <= (currow >> 1); i++) {
        rez [currow][currow-i] = rez [currow][i] = rez [currow-1][i-1] + rez [currow-1][i];
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