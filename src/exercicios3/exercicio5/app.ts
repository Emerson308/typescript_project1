
import formatarNome from "./utils/strings";
import { contarVogais } from "./utils/strings";
import { OperacoesMatematicas } from "./utils/numeros";
import { MAX_VALOR } from "./utils/numeros";


console.log(formatarNome('emerson bruno carvalho da silva'));
console.log(contarVogais('Olá, Mundo'));

const arrayNumeros = [10, 25, 5, 40, 15];
let somaArrayNumeros = OperacoesMatematicas.somarArray(arrayNumeros)
console.log(somaArrayNumeros);
console.log(OperacoesMatematicas.ehPar(somaArrayNumeros))

if( somaArrayNumeros > MAX_VALOR){
    console.log('Soma excede o valor máximo permitido')
} else{
    console.log('Soma dentro do limite')

}


