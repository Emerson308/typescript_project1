

function gerarSaudacao(pessoa:{primeiroNome:string, ultimoNome?:string}): string {
    
    // let dadosFlexiveis: string = "oi";
    if (pessoa.ultimoNome){
        return `Olá, ${pessoa.primeiroNome} ${pessoa.ultimoNome}!`;
    } else{
        return `Olá, ${pessoa.primeiroNome}`;
    }
    // return dadosFlexiveis;
}

console.log(gerarSaudacao({primeiroNome: "Emerson", ultimoNome: "Silva"}));
console.log(gerarSaudacao({primeiroNome: "Emerson"}));
