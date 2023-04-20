/***
 * 一、题目
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，
并返回其长度。如果不存在符合条件的子数组，返回 0 。
 *二、解题思路
 *---暴力解法
 *两个for循环，发现目标子序列，就取子序列，并且跟已经存在的子序列长度进行比较，选择较小的那个长度。
 *
 * ---滑动窗口解法
 *看到一种能理解的解法，是把数组当成队列，元素一个一个的进去，当这个子数组的元素之和大于或者等于target，
 此时记录这个子序列的长度，同时将这个长度和之前已有的长度进行比较，得到二者最小值。然后队列最前面的元素出队，
 后面增加一个，再次比较之和。重复之前的步骤直到队列为空。
 *
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// 暴力解法
var minSubArrayLen = function (target, nums) {
  let res = Number.MAX_VALUE;
  console.log(Number.MAX_VALUE, "???");

  let n = nums.length;

  let subLength = 0; //子序列长度

  for (let i = 0; i < n; i++) {
    //子序列的起点为i
    let sum = 0;

    for (let j = i; j < n; j++) {
      //子序列的终点j
      sum += nums[j];

      if (sum >= target) {
        //超过target，就更新res
        subLength = j - i + 1; //子序列的新长度
        res = res < subLength ? res : subLength;
        break; //一旦符合条件就退出
      }
    }
  }
  //   Number.MAX_VALUE = 1.7976931348623157e+308，表示最大的数。res没有被赋值就为0
  return res === Number.MAX_VALUE ? 0 : res;
};
// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));

// 滑动窗口法
var minSubArrayLen = function (target, nums) {
  let start, end;
  start = end = 0;
  let sum = 0;
  let n = nums.length; //所给数组的长度
  let ans = Infinity; //超过最大数的值，失去其实际值
  while (end < n) {
    //窗口的结束位置小于数组长度
    sum += nums[end]; //窗口所包含数字之和
    while (sum >= target) {
      ans = Math.min(ans, end - start + 1);
      sum -= nums[start]; //窗口朝前移动，所以现在的和要减去现在窗口的start所在的值
      start++; //初始位置的指针朝前走
    }
    end++;
  }
  return ans === Infinity ? 0 : ans;
};
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
