


export class OperacoesMatematicas{

    static somarArray(numeros: number[]): number{
        let somaNumeros: number = 0;
        numeros.forEach((numero) => {
            somaNumeros += numero;
        })
        return somaNumeros;
    }

    static ehPar(numero: number): boolean{
        return (numero%2 == 0);
    }
}

export const MAX_VALOR = 1000;