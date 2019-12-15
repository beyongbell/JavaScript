let a = 4;
let b = 5;

function add(a, b) {
    let result = a + b;
    console.log("add", result.toFixed(2))
    return true
}

function test() {
    console.log("Test")
}

let rs = add(a,b);
console.log(rs)
add(a,b)
test()