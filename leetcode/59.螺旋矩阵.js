/***
 * 一、题目
 *给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 *
 *二、思路
 *---1.确定边界，遵循循环不变量原则，确定每一次的区间都是左闭右开。
 *---2.判断n是不是奇数，n%2=1则是奇数，此时需要给最中间的位置赋值。
 *---3.判断旋转的圈数，n/2，向下取整
 */

var generateMatrix = function (n) {
  let startX = (startY = 0); // 初始化
  let loop = Math.floor(n / 2); //旋转圈数
  let mid = Math.floor(n / 2); //中间位置
  let offSet = 1;
  let count = 1;
  let res = new Array(n).fill(0).map(() => new Array(n).fill(0));
  while (loop--) {
    let row = startX,
      col = startY;
    // 从左往右，左开右闭
    for (; col < startY + n - offSet; col++) {
      res[row][col] = count++;
    }
    //右列，从上往下
    for (; row < startX + n - offSet; row++) {
      res[row][col] = count++;
    }
    //下行，从右往左
    for (; col > startY; col--) {
      res[row][col] = count++;
    }
    //左列，从下往上
    for (; row > startX; row--) {
      res[row][col] = count++;
    }
    // 更新起始位置
    startX++;
    startY++;

    //更新offSet
    offSet += 2;

    if (n % 2 == 1) {
      res[mid][mid] = count++;
    }
    return res;
  }
};
