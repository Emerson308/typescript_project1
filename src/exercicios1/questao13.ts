

function TypeScript(argumento: string|number){
    if(typeof(argumento) === 'string'){
        console.log(`O argumento é uma string`);
    } else {
        console.log(`O argumento é um número`);
    }
}

TypeScript('olá');