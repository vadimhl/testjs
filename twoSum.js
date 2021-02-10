var twoSum = function(numbers, target) {
    let min=0;
    
    while (min<numbers.length-1 ) {
        let max=min+1;
        console.log(`1.  min=${min}  max=${max}`)
        while (max<numbers.length ) {
            console.log(`2.  min=${min}  max=${max}`)
            if (numbers[min]+numbers[max]== target) return [min+1,max+1];
            max++;
        }
        min++;
    }
};
console.log(twoSum([2,3,4], 6));