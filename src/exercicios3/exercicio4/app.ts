
import { Venda } from "./interfaces/IVenda";
import { gerarResumoVendas, atualizarStatusVenda, registrarVenda, prepararVendaParaCliente } from "./utils/relatorioVendas";

let venda1: Venda = {
    idVenda: '1',
    data: 'hdjhakjhdah',
    valorTotal: 100,
    clienteId: '2',
    status: "pendente"
}

gerarResumoVendas([venda1]);

let novaVenda = atualizarStatusVenda(venda1, {status: 'concluida'});
console.log(novaVenda)

const vendaSomenteLeitura: Readonly<Venda> = {
    idVenda: "READONLY_VENDA001",
    data: "2025-06-25",
    valorTotal: 99.99,
    clienteId: "CLI_RO",
    status: "pendente"
} as const;

console.log("Venda Somente Leitura criada:", vendaSomenteLeitura);


console.log(prepararVendaParaCliente(venda1));






