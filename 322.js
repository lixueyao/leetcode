/**
 * 零钱兑换
 */
//dp
function coinChange(coins, amount) {
    if(!coins.length ) return -1;
    if(!amount) return 0;

    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for(let i = 0; i < dp.length; i++) {
        for(let item of coins) {
            if(item <= i) {
                dp[i] = Math.min(dp[i], dp[i - item] + 1);
            }
        }
    }

    return dp[amount] == Infinity ? -1 : dp[amount];
}
let coins = [1, 2, 5];
let amount = 11;
let num = coinChange(coins, amount);
console.log(num)