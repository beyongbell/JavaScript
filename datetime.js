// Date objects in JavaScript
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// moment.js
let log = console.log;

let d = new Date();
log(d);

let num = 1000 * 60 * 60 * 24 * 365.25 * 40; 
// approx 40 yrs
// ms * sec * min * hr * day * year * x
let str = '20 July 2012';

let d1 = new Date(1500000000000);
//Unix Epoch Jan 1 00:00:00.000 1970
log(d1);
let d2 = new Date(num);
log(d2);
let d3 = new Date(str);
log(d3);
let d4 = new Date(2017, 0, 1, 12, 30, 0, 123);
log(d4);

d.setFullYear(2020);
d.setHours(9); //setMinutes(), setMonth(), setDate()
log(d);

let t = d.getMinutes();
let d5 = d.getDay();
log(t, d5);

//OUTPUT
/***
d5.toDateString() - date portion UTC time
d5.toTimeString() - date portion UTC time
d5.toISOString() - date simplified UTC
d5.toJSON() - date for use in JSON string. UTC
d5.toLocaleString();  - local time and date
d5.toLocaleString('en-CA'); - local time and date with specified formatting
d5.toUTCString()
**/
log(d4.toDateString() );
log(d4.toTimeString() );
log(d4.toLocaleString('en-CA') );
log( d4.toUTCString() )