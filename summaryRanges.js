var summaryRanges = function(nums) {
    if (nums.length == 0) return nums;
    if (nums.length == 1) return [""+nums[0]];
    const rez = [];
    let st = nums[0];
    let en = st;
    for ( let i=1; i<nums.length; i++) {
        console.log(`1. i=${i} st=${st} en=${en}`)
        if ( nums[i] - 1 == en ) {
            en++;
        } else {
            rez.push( st == en?""+st:st + "->" + en);
            st = nums[i];
            en = st;
        }
        console.log(`2. i=${i} st=${st} en=${en}`)
    }
    rez.push( st == en?""+st:st + "->" + en);
    return rez;
};
console.log(summaryRanges([0,1]));
