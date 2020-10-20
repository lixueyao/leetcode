function longestCommonSubsequence(str1, str2) {
    let m = str1.length;
    let n = str2.length;
    let dp = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0));

    for(let i = 1; i <= m; i++) {
        for(let j = 1; j <= n; j++) {
            if(str1[i] === str2[j]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
}

let str1 = 'abcde';
let str2 = "abc";
let res = longestCommonSubsequence(str1, str2);
console.log("最长公共子序列是：", res);
