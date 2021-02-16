/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    console.log(nums);
    if ( k > nums.length) return false;
    for ( i = 1; i<nums.length; i++) {
        console.log(`1. i=${i}   nums[i]=${nums[i]}`);
        for ( j = i-1; i-j<=k && j>=0; j--) {
            console.log(`2. i=${i}  j=${j} nums[i]=${nums[i]} nums[j]=${nums[j]}`);
            if ( nums[i]===nums[j] ) return true;
        }
    }
    return false;
};
console.log(containsNearbyDuplicate([1,1], 2)); 