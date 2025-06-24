

let argumento: any;
let argumentoString: string;

if(typeof(argumento) === 'object'){
    argumentoString = JSON.stringify(argumento);
} else {
    argumentoString = argumento.toString();
}