/**
 * 一、题目
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
 *
 * 二、思路
 * ---快速判断一个元素是是否出现在集合中，就要想到用哈希法来解决问题。
 * ---常见的3种哈希表的数据结构
 *    数组：简单的hash表，哈希值小，范围可控
 *    set：数据结构大
 *    map：数据结构法，并且key有对应的value值
 * ---本题思路
 *    1.创建一个新数组，用来记录字符串中字符出现的次数//相当于将字符映射到数组也就是哈希表的索引下标上
 *    2.遍历第一个字符串，将出现的字符次数记录+1
 *    3.遍历第二个字符串，将出现的字符次数-1
 *    4.最后判断数组中元素值是不是都为0，如果不是则返回false
 *
 *
 */

// 代码
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let arr = new Array(26).fill(0); //新建数组，每个元素的值为0
  let pivod = "a".charCodeAt(0); //97,不用特意去记ASCII,这里只需要相对位置，eg: "f".charCodeAt(0)=102，减去97，相对位置是5
  for (let i = 0, n = s.length; i < n; i++) {
    arr[s.charCodeAt(i) - pivod]++;
    arr[t.charCodeAt(i) - pivod]--;
  }
  return arr.every((i) => i === 0); //返回的是一个布尔值
};
