var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

integers = integers.sort(function (a, b) { return a - b}).reverse().filter(function(i) {return i < 19}).map(function(i) { return i * 1.5 - 1}).reduce(function(prev, curr) { return prev + curr});
console.log(integers);




