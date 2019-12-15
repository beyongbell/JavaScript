var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];

let name = fruits.map(function output(item, index, array) {
    return index
})

console.log(name)

let len_name = fruits.map(function output(item, index, array) {
    return item.length
})

console.log(len_name)
