var singleNumber = function(nums) {
    
    return nums.reduce( (sum, el) => sum ^ el);
};
console.log(singleNumber([4,1,2,1,2]));