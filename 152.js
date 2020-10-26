/**
 *获取最大乘积
 */

function maxProduct(nums) {
    if(!nums.length) return 0;
    let max = nums[0];
    let imin = 1, imax = 1;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < 0) {
            let temp = imax;
            imax = imin;
            imin = temp;
        }
        imax = Math.max(nums[i], imax * nums[i]);
        imin = Math.min(nums[i], imin * nums[i]);

        max = Math.max(max, imax);
    }

    return max;
}

console.log(maxProduct([2, 3, -2, 4]));