/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection1 = function(nums1, nums2) {
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
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let big;
    let small;
    if ( nums1.length < nums2.length) {
        small=nums1;
        big= nums2;
    } else {
        small=nums2;
        big= nums1;
    }
    const res = [];
    const map = new Map();
    small.forEach( el => { map.set( el, (map.get(el)??0)+1 ) });
    big.forEach( el => {
        let cnt= map.get(el)??0;
        if (cnt) {
            res.push(el);
            map.set(el, cnt-1);
        }
    } )
    return res;
};
console.log(intersect([1,2,2,1], [2,2,3]));