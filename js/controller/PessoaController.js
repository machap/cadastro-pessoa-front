class PessoaController {
    constructor() {
        this._listaPessoas = new ListaPessoas();
    }

    importaPessoas() {
        let service = new PessoaService();

        let promise = service.obterTodos();
        promise.then(pessoas => {
            // pessoas.forEach(pessoa => this._listaPessoas.adiciona(pessoa));
            pessoas.forEach(pessoa => console.log(pessoa));
        }).catch(erro => console.log(erro));
    }
    
}