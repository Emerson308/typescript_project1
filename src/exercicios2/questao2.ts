
let dadosFlexiveis:any;
dadosFlexiveis = "Olá typescript";
console.log(dadosFlexiveis);
dadosFlexiveis = 123;
console.log(dadosFlexiveis);

inferirTipo("Ola");
inferirTipo(123);


function inferirTipo(dados:any){
    let dadosType = typeof dados;
    console.log(dadosType);
}
