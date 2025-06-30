

export interface DadosBase{
    id: any
}

export interface DadosUsuarios{
    nome: string,
    email: string
}

export interface DadosProdutos{
    produtoId: string,
    valor: number
}

export type UsuarioCompleto = DadosBase & DadosUsuarios;
export type ItemPedido = DadosBase & DadosProdutos;





