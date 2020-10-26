/**
 * 最大子序列和
 */
// let arr = [2, 1, -5, 4];
// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];


//暴力
function maxSubArray(nums) {
    if(!nums.length) return 0;
    let max = nums[0];
    for(let i = 0; i  < nums.length; i++) {
        let sum = 0;
        for(let j = i; j < nums.length; j++) {
            sum += nums[j];
            if(sum > max) {
                max = sum;
            }
        }
    }

    return max;
}

//dp
function maxSubArray2(nums) {
    if(!nums.length) return 0;
    let max = nums[0];
    let dp = nums;
    for(let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
        max = Math.max(dp[i], max);
    }
    return max;
}

//分治

function maxSubArray3(nums) {
    if(!nums.length) return 0;
    return getMax(nums, 0, nums.length - 1);
}

function getMax(nums, left, right) {
    if(left == right) return nums[left];
    let mid = (left + right) >> 1;
    let leftMax = getMax(nums, left, mid);
    let rightMax = getMax(nums, mid+1, right); 
    let cross = crossMax(nums, left, mid, right);
    let res = Math.max(leftMax, rightMax)
    res = Math.max(res, cross);
    return res;
}

function crossMax(nums, left, mid, right) {
    let leftMax = nums[mid];
    let sum = 0;
    for(let i = mid; i >= left; i--) {
        sum += nums[i];
        leftMax = Math.max(sum, leftMax);
    }

    let rightMax = nums[mid + 1];
    sum = 0;
    for(let j = mid + 1; j <= right; j++) {
        sum += nums[j];
        rightMax = Math.max(sum, rightMax);
    }

    return (leftMax + rightMax);
}

console.log(maxSubArray3(arr))
