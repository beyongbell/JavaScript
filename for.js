const names = ['Luke', 'Bell', 'Han', 'Che', 'Bell'];
const numNames = names.length;
console.log(names);
console.log(numNames);

console.log(">>> For Loop");
for(let i = 0; i < numNames; i++) {
    console.log(names[i]);
}
console.log(">>> For Loop Reverse");
for(let i=numNames - 1; i >= 0; i--) {
    console.log(names[i]);
}
console.log(">>> For Loop Step 3");
for(let i = 0; i < numNames; i+=3) {
    console.log(names[i]);
}