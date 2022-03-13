//two Sum
// indices of the two numbers such that they add up to target

//暴力
function twoSum (nums, target) {
	if (!nums.length) return [];
	let map = {};

	for (let i = 0; i < nums.length; i++) {
		if (target - nums[i] in map) {
			return [i, map[target - nums[i]]];
		} else {
			map[nums[i]] = i;
		}
	}

	return [];
}

const nums = [1, 4, 5, 7];
const res = twoSum(nums, 5);
console.log('最后返回的结果是', res);
