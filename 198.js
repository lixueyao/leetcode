let arr = [1,2,3,1];

//dp[i]  0--偷  1--- 不偷
function rob1(nums) {
    let n = nums.length;
    if(n <= 1) n == 0? 0 : nums[0];

    let dp = Array.from(new Array(n), () => new Array(2).fill(0));
    dp[0][0] = 0;
    dp[0][1] = nums[0];

    for(let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][0]);
        dp[i][1] = dp[i - 1][0] + nums[i];
    }

    return Math.max(dp[n - 1][0], dp[n - 1][1]);
}
console.log(rob1(arr));



function rob2(nums) {
    let n = nums.length;
    if(n <= 1) n == 0 ? 0:nums[0];

    let dp = [];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for(let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
    }

    return dp[n - 1];
}
console.log(rob2(arr))


function rob3(nums) {
    let n = nums.length;
    if (n <= 1) return n == 0 ? 0 : nums[0];
    let dp = [];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
    }

    return dp[n - 1];
}

console.log(rob3(arr))