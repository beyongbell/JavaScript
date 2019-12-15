const characters = ['Luke', 'Bell', 'Han', 'Che'];
console.log(characters);
console.log(characters.length);
console.log(characters[0]);

characters.push('Ana'); // ADD LAST
console.log(characters);

characters.pop(); // REMOVE LAST
console.log(characters);

characters.unshift('EiEI'); // ADD FIRST
console.log(characters);

characters.shift(); // REMOVE FIRST
console.log(characters);