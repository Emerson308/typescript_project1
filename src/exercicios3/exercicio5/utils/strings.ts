

export default function formatarNome(nomeCompleto: string): string{
    let listaStrings: string[] = nomeCompleto.split(" ");

    for(let i = 0; i < listaStrings.length; i++){
        let nome = listaStrings[i];
        listaStrings[i] = nome.charAt(0).toUpperCase() + nome.slice(1);  
    }
    listaStrings[0] = listaStrings[0].toUpperCase();
    let nomeCompletoCorrigido: string = listaStrings.join(" ")


    return nomeCompletoCorrigido;

};

export function contarVogais(texto: string): number{
    let caracteres: string[] = [...texto];
    let numeroVogais: number = 0
    caracteres.forEach((caractere) => {
        if ( 'aeiou'.includes(caractere.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase())){
            numeroVogais += 1;
        }
    })

    return numeroVogais;

}


