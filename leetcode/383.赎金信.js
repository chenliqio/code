/*
题目：
给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
如果可以，返回 true ；否则返回 false 。
magazine 中的每个字符只能在 ransomNote 中使用一次。

思路：快速判断元素有没有出现在集合中，使用哈希法
--因为题目中只有小写字母，体量较小，可以使用数组
 */




/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const strArr = new Array(26).fill(0),
    base = "a".charCodeAt(0);

    // 记录magazine中出现字母的次数
    for(const s of magazine){
        strArr[s.charCodeAt - base]++
    }
    // 记录ransomNote中出现字母的次数
    for(const s of ransomNote){
        //如果出现没记录过的字母，就直接返回false
       const index = s.charCodeAt - base;
       if(!strArr[index]) return false;
       strArr[index]--;
    }
    return true
};