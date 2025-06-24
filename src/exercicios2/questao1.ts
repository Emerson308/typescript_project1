

function processarDados(nome:string, idade:number[]){
    console.log(`Olá, ${nome.toUpperCase()}!!`);
    let soma: number = 0;
    for (let i = 0; i < idade.length; i++){
        soma += idade[i];
    };
    console.log(`Soma das idades: ${soma}`);
    if (idade[0] % 2 == 1){
        console.log(`A primeira ${idade[0]} é ímpar`);
    } else{
        console.log(`A primeira ${idade[0]} é par`);
    }
}

processarDados("joão", [25, 30, 22]);