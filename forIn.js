let monsters = { Canada: 'Sasquatch' , Nepal : 'Yeti', Scotland : 'Loch Ness Monster' }
console.log(monsters)

for(let prop in monsters) {
    // console.log(prop)
    // console.log(monsters[prop])
    console.log("In", prop, "We have the ", monsters[prop])
}

let pets = ["Woody", 'Roxy', 'Bob'];

for(let prop in pets) {
    // console.log(prop)
    // console.log(monsters[prop])
    console.log("In", prop, "We have the ", pets[prop])
}