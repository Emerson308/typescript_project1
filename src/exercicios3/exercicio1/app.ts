import { Livro } from "./models/livro";
import { Publicacao } from "./models/publicacao";


let harryPotter = new Livro('1', 'Harry Potter', 'J.K Rowling', 2007, true);
let harryPotter2 = new Livro('2', 'Harry Potter', 'J.K Rowling', 2007, true);

let condicao = harryPotter.emprestar()
if(condicao){
    console.log('O livro foi emprestado')
} else{
    console.log('O livro não foi emprestado')

}
let condicao2 = harryPotter.emprestar()
if(condicao2){
    console.log('O livro foi emprestado')
} else{
    console.log('O livro não foi emprestado')

}

if(harryPotter.devolver()){
    console.log('O livro foi devolvido')
} else{
    console.log('O livro não foi devolvido')
}

if(harryPotter.emprestar()){
    console.log('O livro foi emprestado')
} else{
    console.log('O livro não foi emprestado')

}



