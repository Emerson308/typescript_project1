
import { UsuarioCompleto } from "../types/dados";
import { ItemPedido } from "../types/dados";



export function processarDados(dados: any[]){

    dados.forEach((item):any => {
        if (item && typeof item.nome === 'string' && typeof item.email === 'string'){
            let usuario = item as UsuarioCompleto;

            console.log(`Id: ${typeof usuario.id}`)
            console.log(`Nome: ${typeof usuario.nome}`)
            console.log(`Email: ${typeof usuario.email}`)
            
            
            
        } else if( item && typeof item.produtoId === 'string' && typeof item.valor === 'number'){
            let produto = item as ItemPedido;
            
            console.log(`Id: ${typeof produto.id}`)
            console.log(`Nome: ${typeof produto.produtoId}`)
            console.log(`Email: ${typeof produto.valor}`)
        } else {
            console.log(`Item com estrutura desconhecida ${item}`)
        }
    })
}





