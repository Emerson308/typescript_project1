
import { Venda } from "../interfaces/IVenda";

export function gerarResumoVendas(vendas: Venda[]): Pick<Venda, 'idVenda' | 'valorTotal' | 'status'>[] {
    return vendas.map(venda => ({
        idVenda: venda.idVenda,
        valorTotal: venda.valorTotal,
        status: venda.status
    })
)
};

export function atualizarStatusVenda(vendaOriginal: Venda, novoStatus: Partial<Venda>): Venda{
    return {...vendaOriginal, ...novoStatus};
}

export function registrarVenda(venda: Readonly<Venda>): void{
    console.log(venda);
}

export function prepararVendaParaCliente(venda: Venda): Omit<Venda, 'clienteId' | 'status'>{
    let {clienteId, status, ...restOfVenda} = venda;
    return restOfVenda;
}
