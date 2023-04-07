// 题目
// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 思路：有序数组，要考虑能不能用二分法
// 返回这个元素的index 有四种情况
// 1.目标值在所有元素之前
// 2.目标值在所有元素之后
// 3.目标值等于数组中的某一个元素  return mid
// 4.不存在目标值，返回目标值应该插入的位置  return right + 1 (这是闭区间，若为左闭右开，则返回的是right)

function searchInsert(nums: number[], target: number): number {
    const length: number = nums.length;
    let left: number = 0,
        right: number = length - 1;
    while (left <= right) {
        const mid: number = Math.floor((left + right) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] === target) {
            return mid;
        } else {
            right = mid - 1;
        }
    }
    return right + 1;
};