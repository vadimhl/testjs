//121. Best Time to Buy and Sell Stock 2
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProf = 0;
    let curProf = 0;
    for (let i = 1; i < prices.length; i++) {
        if ( prices[i]>= prices[i-1]) {
            curProf += prices[i] - prices[i-1];
        } else {
            maxProf += curProf;
            curProf = 0;
        }
    }
    return maxProf+curProf; 
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));