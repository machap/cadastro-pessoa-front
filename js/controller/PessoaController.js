class PessoaController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputNome = $('#nome');
        this._inputIdade = $('#idade');
        this._inputEmail = $('#email');

        this._listaPessoas = new ListaPessoas();

        this.importaPessoas();
    }

    cadastrarPessoa(event) {
        event.preventDefault();

        let pessoa = new Pessoa(
            0,
            this._inputNome.value,
            this._inputIdade.value,
            this._inputEmail.value);

        let service = new PessoaService();
        service.adicionar(pessoa)
            .then(pessoa => {

                let tbody = document.querySelector('table tbody');
                let tr = document.createElement('tr');
                let tdId = document.createElement('td');
                let tdNome = document.createElement('td');
                let tdIdade = document.createElement('td');
                let tdEmail = document.createElement('td');

                tdId.textContent = pessoa.id;
                tdNome.textContent = pessoa.nome;
                tdIdade.textContent = pessoa.idade;
                tdEmail.textContent = pessoa.email;

                tr.appendChild(tdId);
                tr.appendChild(tdNome);
                tr.appendChild(tdIdade);
                tr.appendChild(tdEmail);

                tbody.appendChild(tr);

            }).catch(erro => console.log(erro));
    }

    importaPessoas() {

        let service = new PessoaService();
        let promise = service.obterTodos();

        promise.then(pessoas => {
            pessoas.forEach(pessoa => {
                this._listaPessoas.adiciona(pessoa);
            });

            this._listaPessoas.pessoas.forEach(pessoa => {
                let tbody = document.querySelector('table tbody');
                let tr = document.createElement('tr');
                let tdId = document.createElement('td');
                let tdNome = document.createElement('td');
                let tdIdade = document.createElement('td');
                let tdEmail = document.createElement('td');

                tdId.textContent = pessoa.id;
                tdNome.textContent = pessoa.nome;
                tdIdade.textContent = pessoa.idade;
                tdEmail.textContent = pessoa.email;

                tr.appendChild(tdId);
                tr.appendChild(tdNome);
                tr.appendChild(tdIdade);
                tr.appendChild(tdEmail);

                tbody.appendChild(tr);
            });

        }).catch(erro => console.log(erro));
    }
}