// Truthy and Falsy in JavaScript
// Boolean-ish
// null, undefined, 0, false, '', "", NaN - FALSEY
//

let log = console.log;
let es = "";
let z = 0;
let n = null;
let u = undefined;
let f = false;
let i = NaN;

if(es || z || n || u || f || i ){
    log('The true part')
}else{
    log('The false part')
}