const characters = ['Luke', 'Bell', 'Han', 'Che'];
console.log(characters);

characters.splice(0, 1, 'Ray');
console.log(characters);

characters.splice(1, 2, 'Kyo');
console.log(characters);

characters.splice(1, 1, 'C3PO', 'R202');
console.log(characters);

characters.splice(1, 2);
console.log(characters);

characters.push('B88');
characters.push('Obi');
console.log(characters);

characters.reverse();
console.log(characters);

characters.sort();
console.log(characters);
