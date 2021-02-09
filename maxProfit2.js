//121. Best Time to Buy and Sell Stock 2
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    return prices.reduce( (sum, val, i, arr) => 
                          {   if ( i==0)  return 0;
                              return sum + (val>arr[i-1] ? val-arr[i-1] : 0)  
                          }
                         , 0);
}
console.log(maxProfit([7,1,5,3,6,4]));
//console.log(`sum=${sum}  i=${i} add=${add}  val=${val} prices[i]=${prices[i]}`);