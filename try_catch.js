//throwing Errors and Exceptions
//and
//using Try...Catch to handle thrown Errors and Exceptions
//Error Types:
// EvalError, InternalError, RangeError, ReferenceError,
// SyntaxError, TypeError, URIError

try{
    //throw 'Javelin';
    //throw {name:'Bubba', message:'Salmon'};
    let url = "http://jsonplaceholder.typicode.com";
    fetch(url).then((response)=>{})
    //throw new Error('A stick');
    console.log('Hello');
}catch(err){
    console.log('Caught', err.name, err.message);
}finally{
    console.log('Took you a long time');
}

console.log('end');