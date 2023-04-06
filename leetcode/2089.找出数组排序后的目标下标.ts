// 一、题目描述：给你一个下标从 0 开始的整数数组 nums 以及一个目标元素 target 。
// 目标下标 是一个满足 nums[i] == target 的下标 i 。
// 将 nums 按 非递减 顺序排序后，返回由 nums 中目标下标组成的列表。如果不存在目标下标，返回一个 空 列表。返回的列表必须按 递增 顺序排列。

// 二、做题思路
// 使用sort方法对数组进行排序，然后使用for循环遍历，判断是否存在目标元素。

var targetIndices = function (nums: number[], target: number): number[] {
  let order = nums.sort((a, b) => a - b);
  const n = order.length;
  let res: number[] = [];
  for (let i = 0; i < n; i++) {
    if (order[i] === target) {
      res.push(i);
    }
  }
  return res;
};
