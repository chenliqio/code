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
    // length-1表示target在nums区间的右边
    let leftBoard: number = nums.length - 1;
    while (left <= right) {
      // 右移运算符>> ，运算结果是一个整数的二分之一，能代替数学上除2的运算，但是比这个运算更快
      //   let mid = left + ((right - left) >> 1);
      let mid = Math.floor((left + right) / 2); //防止溢出
      if (nums[mid] >= target) {
        // 左边界一定在mid左边（不含mid）
        right = mid - 1;
        leftBorder = right;
      } else {
        // 左边界在mid右边（含mid）
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
        rightBorder = left;
      } else {
        // 右边界在mid左边（含mid）
        right = mid - 1; 
      }
    }
    return rightBorder;
  };

  let leftBorder: number = getLeftBorder(nums, target);
  let rightBorder: number = getRightBorder(nums, target);

  //   情况1 在区间范围之外的左侧或者右侧
  if (leftBorder === nums.length - 1 || rightBorder === 0) {
    return [-1, -1];
  }
  //   情况3 在区间内并且存在target
  if (leftBorder - rightBorder > 1) return [leftBorder + 1, rightBorder - 1];

  //   情况2  在区间内但不存在target
  //   if (leftBorder - rightBorder <=1) return [-1, 1];
  return [-1, 1];
}
