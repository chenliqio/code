// 一、题目：给你一个 m * n 的矩阵 grid，矩阵中的元素无论是按行还是按列，都以非递增顺序排列。 请你统计并返回 grid 中 负数 的数目。

// 二、思路：

// 三、代码
function countNegatives(grid: number[][]): number {
  const m: number = grid.length; //获取二维数组的行数，
  const n: number = grid[0].length; //二维数组的列数，也就是第一行的数组的长度
  let count: number = 0; //计数的初始值
  for (let i = 0; i < m; i++) {
    //开始遍历二维数组的行
    let row: number[] = grid[i]; //定义列的行数，从上往下遍历
    let left: number = 0;
    let right: number = n - 1;
    // 二分查找，确定负数区间的长度
    while (left <= right) {
      let mid: number = Math.floor(left + (right - left) / 2);
      if (row[mid] < 0) {
        //mid 对应的值小于0 说明要找的第一个负数还在左边
        right = mid - 1;
      } else if (row[mid] > 0) {
        left = mid + 1;
      }
    }
    // 最后得到第一个负数的下标left，计算负数区间
    count += n - left;
  }
  return count;
}
