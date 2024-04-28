class Main {
    usuarios;

    constructor() {
        this.usuarios = [];
    }

    addUsuario(usuario) {
        this.usuarios.push(usuario);
    }
    
    addLivroUsuario(idUsuario, codigoLivro, titulo, autor) {     
        let usuario = this.usuarios.find(u => u.id === idUsuario);
        
        if (!usuario) {
            console.log("## [addAutomovelPessoa] Pessoa não encontrada ##");
            return
        }
        
        usuario.inserirLivroEmprestado(new Livro(codigo, titulo, autor));
    }
     
    transferirLivro(idUsuarioOrigem, idUsuarioDestino, codLivro) {
        let usuarioOrigem = this.usuarios.find(u => u.id === idUsuarioOrigem);
        let usuarioDestino = this.usuarios.find(u => u.id === idUsuarioDestino);
        
        if (!usuarioOrigem || !usuarioDestino) {
            console.log("## Usuário não encontrado ##");
            return;
        }
        
        let livro = usuarioOrigem.getLivroEmprestado(codLivro);
        if (!livro) {
            console.log("## Livro não encontrado ##");
            return;
        }
        
        pessoaDestino.inserirLivroEmprestado(livro);
        pessoaOrigem.removerLivroEmprestadoByCod(livro.codigo);
    }

    mostrarTodosOsUsuarios() {
        let resultado = "Usuários:\n";
        this.usuarios.forEach(usuario => {
            resultado += `${usuario.imprimirCompleto()}\n\n`;
        });
        console.log(resultado);
    }
}


// const main = new Main();
// main.addUsuario(new Usuario(1, "Carlos"));

// main.addLivroUsuario(1, 1, "Dom Quixote", "Miguel de Cervantes");
// main.addLivroUsuario(1, 2, "Orgulho e Preconceito", "Jane Austen");

// main.mostrarTodosOsUsuarios();

// main.addUsuario(new Usuario(2, "Ana"));
// main.transferirLivro(1, 2, 1);

// main.mostrarTodosOsUsuarios();