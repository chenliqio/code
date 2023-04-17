// 循环不变量：是一组在循环体内、每次迭代均保持为真的性质，通常被用来证明程式或者伪码的正确性

/**
 * 一、题目
 * 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
如果数组中不存在目标值 target，返回 [-1, -1]。
你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
 *
 *二、思路
 情况1：target在数组范围的左边或右边，此时返回 [-1, -1]。
 情况2：target在数组范围内，但是数组中不存在target，此时返回 [-1, -1]。
 情况3：target在数组范围内，但是数组中存在target，此时返回 [start, end]。
 *
 */

function searchRange(nums: number[], target: number): number[] {
  // 查找第一个小于target的元素下标
  const getLeftBorder = (nums: number[], target: number): number => {
    let left: number = 0,
      right: number = nums.length - 1; //定义target在左闭右闭的区间里面
    let leftBorder = -2; // leftBorder没有被赋值的情况
    while (left <= right) {
      // 右移运算符>> ，运算结果是一个整数的二分之一，能代替数学上除2的运算，但是比这个运算更快
      let mid = left + ((right - left) >> 1);
      if (nums[mid] >= target) {
        right = mid - 1;
        leftBorder = right;
      } else {
        left = mid + 1;
      }
    }
    return leftBorder;
  };

  // 查找第一个大于target的元素下标
  const getRightBorder = (nums: number[], target: number): number => {
    let left: number = 0,
      right: number = nums.length - 1;
    //0表示target在nums区间的左边
    let rightBorder: number = 0;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] <= target) {
        // 右边界一定在mid右边（不含mid）
        left = mid + 1;
        rightBorder = left; //当nums[mid] == target ,更新left，这样才能得到target的右边界 [mid+1,right]
      } else {
        // 右边界在mid左边（含mid）
        right = mid - 1; //target 在左区间内，所以[left,mid-1]
      }
    }
    return rightBorder;
  };

  let leftBorder: number = getLeftBorder(nums, target);
  let rightBorder: number = getRightBorder(nums, target);

  //   情况1
  if (leftBorder === -2 || rightBorder === -2) {
    return [-1, -1];
  }
  //   情况3
  if (leftBorder - rightBorder > 1) return [leftBorder + 1, rightBorder - 1];

  //   情况2
  return [-1, 1];
}
