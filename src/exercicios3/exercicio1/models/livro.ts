
import { Publicacao } from "./publicacao";

export class Livro extends Publicacao{
    // titulo: string;
    autor: string;
    anoPublicacao: number;
    estaDisponivel: boolean;

    constructor(id:string,titulo: string, autor: string, anoPublicacao: number, estaDisponivel: boolean){
        // this.titulo = titulo;
        super(id, titulo);
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.estaDisponivel = estaDisponivel;
    }

    emprestar(): boolean{
        if(this.estaDisponivel){
            this.estaDisponivel = false;
            return true;
        }{
            return false;
        }
    }

    devolver():boolean{
        if(this.estaDisponivel){
            return false;
        } else{
            this.estaDisponivel = true;
            return true;
        }
    }
}