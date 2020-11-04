let arr = [2, 3 ,2];

var rob = function (nums) {
    let n = nums.length;
    if (n <= 1) return n == 0 ? 0 : nums[0];
    let rob1 = helper(nums.slice(0, n - 1));
    let rob2 = helper(nums.slice(1, n));
    return Math.max(rob1, rob2);
};

function helper(nums) {
    let n = nums.length;
    if (n <= 1) return n == 0 ? 0 : nums[0];

    let first = nums[0];
    let second = Math.max(nums[0], nums[1]);

    for (let i = 2; i < n; i++) {
        let temp = second;
        second = Math.max(second, nums[i] + first);
        first = temp;
    }

    return second;
}

console.log(rob(arr))