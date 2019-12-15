let numbers = [123, 234, 345, 456, 567];
let names = ['Alex', 'Bree', 'Cara', 'Cole', 'Devon', 'Riley'];

let big = numbers.filter(function(item) {
   return item > 300;
});


let bigA = numbers.filter(item => item > 300);

console.log(big)
console.log(bigA)

names.forEach(function(item, index){
    console.log(index, item)
});

names.forEach((item, index) => console.log(index, item));