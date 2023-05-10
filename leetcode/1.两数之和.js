/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  let resArr = [];
  for (let i = 0; i < nums.length; i++) {
    let index = map.get(target - nums[i]);
    if (index !== undefined) {
      resArr = [i, index];
    }
    map.set(nums[i], i); //将没有匹配到，但是已经遍历的元素存到map中
  }
  return resArr;
};

console.log(twoSum([2, 7, 11, 15], 9));
