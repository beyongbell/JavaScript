//Array concat method

let a = [2, 4, 6, 8];
let b = [1, 3, 5];

//for()
//for( in )
//a.forEach()   push() unshift()

let c = a.concat(b);
console.log("c", c);

let d = [].concat(a, b, c).sort();
console.log("d", d);