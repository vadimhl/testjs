/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let cntz = 0;
    for (let i = 0; i < nums.length; i++) {
        console.log(`1. i=${i}  cntz=${cntz}  nums=${nums}`);
        if (nums[i]) continue;
        let j=i+1;
        while (j < nums.length && nums[j] === 0) {
            j++;
        }
        nums.splice(i, j-i);
        cntz += j-i;
        console.log(`2. i=${i}  cntz=${cntz}  nums=${nums}`);
    }
    for(let i=0; i<cntz; i++) {
        nums.push(0);
    } 
};
const ar=[0,1,0,0,2,3,0];
moveZeroes(ar);
console.log(ar);