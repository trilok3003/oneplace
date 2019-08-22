var numbers = [1,2,4,5,6];
var totals =numbers.reduce((pre,next)=> { return pre + next});
console.log(totals);