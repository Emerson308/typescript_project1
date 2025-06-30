

import { ItemCatalogo } from "../interfaces/IItemCatalogo";

export class CatalogoGenerico<T extends ItemCatalogo>{
    private produtos: T[];

    constructor(produtos: T[]){
        this.produtos = produtos;
    }

    adicionarProduto(produto: T){
        this.produtos.push(produto);
    }

    listarProdutos(): T[] {
        return this.produtos;
    }

    buscarPorNome(nome:string): T[]{
        let listaBusca: T[] = []
        this.produtos.forEach((produto) => {

            let produtoMinusculo = produto.nome.toLowerCase();
            let nomeMinusculo = nome.toLowerCase();
            if(produtoMinusculo.includes(nomeMinusculo)){
                listaBusca.push(produto)
            }
        })
        return listaBusca;
    }
}