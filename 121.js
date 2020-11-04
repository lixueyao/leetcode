let prices  = [7,1,5,3,6,4];

function maxProfit(prices) {
    if(!prices.length) return 0;
    let dp = [];
    dp[0] = prices[0];
    let minPrice = Infinity;
    let len = prices.length;

    for(let i = 0; i < len; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        dp[i] = Math.max(dp[i - 1] ? dp[i - 1] : 0, prices[i] - minPrice);
    }

    return dp[len - 1];
}

console.log(maxProfit(prices));