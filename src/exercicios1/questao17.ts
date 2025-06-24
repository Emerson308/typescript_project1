

function generica(argumento: string|string[]){
    let somaCaracteres: number = 0;
    if(typeof(argumento) === 'string'){
        somaCaracteres += argumento.length;
    } else {
        argumento.forEach((string) => {
            somaCaracteres += string.length;
        })
    }

    
}