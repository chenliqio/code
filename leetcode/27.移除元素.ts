//一、题目描述
// 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
// 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
// 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

// 二、题目分析和思路
// 数组的元素在内存地址中是连续的，不能单独删除数组中的某个元素，只能覆盖。
// 本体使用双指针法：通过一个快指针和慢指针在一个for循环下面完成两个for循环的工作
// 理解快指针和慢指针的作用
// 快指针：寻找新数组的元素，新数组就是不含有目标元素的数组
// 慢指针：指向更新 新数组下标的位置

// 三、代码

function removeElement(nums: number[], val: number): number {
  let slowIndex: number = 0,
    fastIndex: number = 0;
  while (fastIndex < nums.length) {
    if (nums[fastIndex] != val) {
      nums[slowIndex++] = nums[fastIndex];
    }
    fastIndex++;
  }
  return slowIndex;
}
