

type StatusPedido = "pendente" | "processando" | "concluido" | "cancelado";

interface Produto{
    id: number;
    nome: string;
    preco: number;
}

enum PrioridadeEnvio{
    Baixa = 1,
    Media = 2,
    Alta = 3
}

function exibirDetalhesPedidos(produto: Produto, status:StatusPedido, prioridade: PrioridadeEnvio){
    console.log("Detalhes dos Pedido:");
    console.log(`Produto Id: ${produto.id}`);
    console.log(`Nome do Produto: ${produto.nome}`);
    console.log(`Preço: ${produto.preco}`);
    console.log(`Status do Pedido: ${status}`);
    console.log(`Prioridade de Envio: ${prioridade} (${PrioridadeEnvio[prioridade]})`);
}

exibirDetalhesPedidos({id: 101, nome:"Camiseta", preco:29.99}, "processando", PrioridadeEnvio.Media);
