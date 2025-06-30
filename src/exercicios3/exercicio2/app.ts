
import { ItemCatalogo } from "./interfaces/IItemCatalogo";
import { Eletronico } from "./interfaces/IEletronico";
import { Vestuario } from "./interfaces/IVestuario";
import { CatalogoGenerico } from "./models/catalogoGenerico";


let celular: Eletronico = {
    id: number = 1,
    nome: string = "Celular",
    preco: number = 1500,
    marca: string = "Sansung"
}

let camisa: Vestuario = {
    id: number = 2,
    nome: string = "Camisa",
    preco: number = 40,
    tamanho: string = "M"
}

let catalogoEletronico = new CatalogoGenerico<Eletronico>([]);
let catalogoVestuario = new CatalogoGenerico<Vestuario>([]);

catalogoEletronico.adicionarProduto(celular);
catalogoVestuario.adicionarProduto(camisa)

console.log(catalogoEletronico.listarProdutos);
console.log(catalogoVestuario.listarProdutos);

let resultadoBusca = catalogoEletronico.buscarPorNome("celu");
if(resultadoBusca.length >= 1){
    console.log("Foram encontrados produtos")
} else{
    console.log("Não foram encontrados produtos")
}

