var values = ["Saab", "Volvo", "BMW"]; // example 
console.log(values);
values.sort(); // sort
console.log(values);
values.reverse(); // reverse
console.log(values);
values.sort((one, two) => (one > two ? -1 : 1)); // assending
console.log(values);
values.sort((one, two) => (one > two ? 1 : -1)); // dessending
console.log(values);