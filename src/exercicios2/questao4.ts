
function processarID(id: number|string){
    if(typeof id === 'string'){
        console.log(`Seu id (string) em minúsculas: ${id.toLowerCase()}`)
    } else {
        console.log(`Seu id (number) multiplicado por 2: ${id * 2}`);
    }
}

processarID("JJHSJHSJH");
processarID(12);

const nomes = ["João", "Maria", "Lúcia"];

nomes.forEach((nome: string) => {
    console.log(nome.toUpperCase());
})