var numbers = [1,2,4,5,6,7,12,34];
var value = numbers.every(ele => {return ele>=10});
console.log(value);

var numbers = [1,2,4,5,6,7];
var value = numbers.every(ele => {return ele<10});
console.log(value);