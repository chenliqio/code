/*
一、题目
给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方。
组成的新数组，要求也按 非递减顺序 排序。
二、思路
--暴力解法：直接数组平方，然后排序
--双指针解法：原数组有序，并且存在负数，则平方后的最大值在两边，并且不确定是在哪一边，由此
可以考虑双指针的方法。
定义的两个指针分别是 i：指向起始位置的下标，j：指向终止位置的下标。
新数组里面：k：指向新数组的终止位置的下标。
跳出循环的条件就是当 i<=j
*/

// 暴力解法
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // 创建一个新数组
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    // 平方后添加到新数组
    res.push(nums[i] ** 2);
  }
  // 排序
  res.sort((a, b) => a - b);
  //   返回
  return res;
};

// 双指针方法
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let res = [];
  let k = nums.length - 1;
  //   定义两个指针
  let i = 0,
    j = nums.length - 1;
  while (i <= j) {
    if (nums[i] * nums[i] > nums[j] * nums[j]) {
      res[k--] = nums[i] * nums[i];
      i++;
    } else {
      res[k--] = nums[j] * nums[j];
      j--;
    }
  }
  return res;
};

// 补充知识点：for循环和while的循环的使用：循环次数已知，使用for；未知次数或者是条件循环使用while。
