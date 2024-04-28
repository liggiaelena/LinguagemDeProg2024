class Usuario{
    #id
    #nome
    #livrosEmprestados

    constructor(id, nome){
        this.#id = id
        this.#nome = nome
        this.#livrosEmprestados = []
    }

    getId(){
        return this.#id;
    }

    inserirLivroEmprestado(livro){
        this.#livrosEmprestados.push(livro)
    }

    removerLivroEmprestadoByCod(id){
    /*    for(let i = 0; i<this.#automoveis.length; i++){
            if(this.#automoveis[i].codigo === codigo){
                this.#automoveis.splice(i, 1);
                break;
            }
        }*/

        let index = this.#livrosEmprestados.findIndex(livro => livro.codigo === codigo);

        if(index !== -1){
            this.#livrosEmprestados.splice(index, 1);
        }
    }

    getLivroEmprestado(codigo){
        return this.#livrosEmprestados.find(livro => livro.codigo === codigo);
    }

    imprimir(){
        return `============================= Código: ${this.#id}\nNome: ${this.#nome}`;
    }

    imprimirCompleto(){
        let dadosUsuario = this.imprimir();
        let livros = this.#livrosEmprestados.map(livro => livro.imprimir()).join('\n   ');

        return `${dadosUsuario}\nLivros:\n${livros}`;
    }
}


class Livro {
    #codigo
    #titulo
    #autor

    constructor(codigo, titulo, autor) {
        this.#codigo = codigo;
        this.#titulo = titulo;
        this.#autor = autor;
    }

    get codigo() {
        return this.#codigo;
    }

    imprimir() {
        return `Código: ${this.#codigo}, Título: ${this.#titulo}, Autor: ${this.#autor}`;
    }
}