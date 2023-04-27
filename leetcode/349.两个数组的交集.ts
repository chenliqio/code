// # 一、题目描述
// 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。
// 输出结果中的每个元素一定是 唯一 的。我们可以不考虑输出结果的顺序

// 解题思路：将一个数组存到哈希表中，再去遍历另一个数组，看哈希表中是否存在和另一个数组相同的元素

// # 二、代码
function intersection(nums1: number[], nums2: number[]): number[] {
  let resSet: Set<number> = new Set(),
    // 创建一个哈希表，存储 nums1元素
    numsSet: Set<number> = new Set(nums1);
  // 遍历 nums2,使用for循环遍历
  for (let i = 0; i < nums2.length -1 ; i++) {
    // 如果哈希表中有该元素，则将该元素存入哈希表
    if (numsSet.has(nums2[i])) {
      resSet.add(nums2[i]);
    }
  }
  return Array.from(resSet);
}


function intersection2(nums1: number[], nums2: number[]): number[] {
    let resSet:Set<number> = new Set(),
        numSet:Set<number> = new Set(nums1);
        // 使用for of迭代器遍历
    for(let i of nums2){
        if(numSet.has(i)){
            resSet.add(i)
        }
    }
  return Array.from(resSet)
};