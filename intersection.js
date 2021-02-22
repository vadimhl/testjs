/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let big;
    let small;
    if ( nums1.length < nums2.length) {
        small=nums1;
        big= nums2;
    } else {
        small=nums2;
        big= nums1;
    }
    res = new Set();
    const set = new Set(small);
    big.forEach( val => {if (set.has(val)) res.add(val) });
    return [...res];
};
console.log(intersection([4,9,5],  [9,4,9,8,4]));