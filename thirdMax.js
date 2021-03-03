/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    
    let max1;
    let max2;
    let max3;
    for ( n of nums) {
        if ( n===max1 || n===max2 || n===max3 ) {
	        console.log(`=. n=${n}  max1=${max1} max2=${max2}  max3=${max3}`);
        	continue;
        }
        console.log(`0. n=${n}  max1=${max1} max2=${max2}  max3=${max3}`);
        if ( typeof max1 === "undefined" ) {
        	max1 = n;
	        console.log(`1. n=${n}  max1=${max1} max2=${max2}  max3=${max3}`);
        	continue;
        }
		if ( n > max1 ) {
			[max1, max2, max3] = [n, max1, max2];
	        console.log(`2. n=${n}  max1=${max1} max2=${max2}  max3=${max3}`);
	        continue;
		}
        if ( typeof max2 === "undefined" ) {
        	max2 = n;
	        console.log(`3. n=${n}  max1=${max1} max2=${max2}  max3=${max3}`);
        	continue;
        }
		if ( n > max2 ) {
			[max2, max3] = [n, max2];
	        console.log(`2. n=${n}  max1=${max1} max2=${max2}  max3=${max3}`);
	        continue;
		}
		if (typeof max3 === "undefined" || n>max3) {
			max3 = n;
	        console.log(`4. n=${n}  max1=${max1} max2=${max2}  max3=${max3}`);
		}
    }
    return max3??max1;
};