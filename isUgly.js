/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (num<0) return false;
    if (num<7) return true;
    console.log(`S  num=${num}`);
    while (num % 2 === 0) {
        num /=2;
        console.log(`2  num=${num}`);
    }
    
    while (num % 3 === 0) {
        num /=3;
        console.log(`3  num=${num}`);
    }
    while (num % 5 === 0) {
        num /=5;
        console.log(`5  num=${num}`);
    }
    console.log(`R  num=${num}`);

    return num === 1;
};
console.log(isUgly(14));