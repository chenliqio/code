/**
 一、题目
编写一个算法来判断一个数 n 是不是快乐数。

「快乐数」 定义为：

对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
如果这个过程 结果为 1，那么这个数就是快乐数。


二、思路
 最终的结果，就是这个数变成1或者这个数开始重复出现，也就是题目中的无限循环


*/

var getSum = function (n) {
  let sum = 0;
  while (n) {
    sum += (n % 10) ** 2;
    console.log(sum, "h");
    n = Math.floor(n / 10);
    console.log(n, "k");
  }
  return sum;
};
var isHappy = function (n) {
  let set = new Set(); // Set() 里的数是惟一的
  // 如果在循环中某个值重复出现，说明此时陷入死循环，也就说明这个值不是快乐数
  while (n !== 1 && !set.has(n)) {
    set.add(n);
    n = getSum(n); //82
  }
  return n === 1;
};

isHappy(123);
