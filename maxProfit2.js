//121. Best Time to Buy and Sell Stock 2
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProf = 0; 
    if (prices.length<2) return 0;
    let minBuy = prices[0];
    for ( let i = 1; i<prices.length; i++ ) {
        let cur = prices[i] ;
        maxProf = Math.max(cur - minBuy, maxProf);
        minBuy = Math.min(cur, minBuy);
    }
    return maxProf;    
};
console.log(maxProfit( [7,1,5,3,6,4] ) );