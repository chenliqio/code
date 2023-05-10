/*
一、题目
给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，请你计算有多少个元组 (i, j, k, l) 能满足：
0 <= i, j, k, l < n
nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0

二、思路
--定义一个map,key用来存放a和b的两数之和，value用来存两数之和出现的次数
--将四个数组两两分组，nums1和nums2、nums3 和 nums4


*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
  const twoSumMap = new Map();
//  计数
  let count = 0;
// 统计nums1和nums2数组元素之和出现次数，放到map
for (const n1 of nums1){
    for (const n1 of nums2){
        const sum = n1 + n2;
        twoSumMap.set(sum,(twoSumMap.get(sum) || 0 +1));
    }
}
// 接着找到 0-(c+d） 在map中出现的次数，把map中key对应的value值的次数统计出来
for (const n3 of nums3){
    for (const n4 of nums4){
        const sum = n3+n4;
        count += (twoSumMap.get(sum) || 0);
    }
}
return count;
};