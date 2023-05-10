//宏任务
setTimeout(() => {
  console.log(1);
}, 0);

console.log(0);
new Promise((resolve, reject) => {
  //微任务的promise，一旦生成马上执行
  console.log(2);
  setTimeout(() => {
    console.log(3);
    resolve(4);
  }, 0);
}).then((val) => {
  console.log(val);
});
setTimeout(() => {
  console.log(5);
}, 0);

//同步任务
console.log(6);
// 执行结果:1,2,3,4,5,6

// 正确结果：2,6,1,3,4,5
