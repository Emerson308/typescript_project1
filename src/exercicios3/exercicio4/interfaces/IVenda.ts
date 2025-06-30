

export interface Venda{
    idVenda: string,
    data: string,
    valorTotal: number,
    clienteId: string,
    status: 'pendente' | 'concluida' | 'cancelada'
}