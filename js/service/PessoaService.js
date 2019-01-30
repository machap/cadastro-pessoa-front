class PessoaService {
    constructor() {
        this._http = new HttpService();
    }

    obterTodos() {
        return new Promise((resolve, reject) => {
            this._http.get('https://apirest-pessoas.herokuapp.com/api/pessoas')
                .then(pessoas => {
                    resolve(pessoas.map(objeto => new Pessoa(objeto.id, objeto.nome, objeto.idade, objeto.email)));
                }).catch(erro => {
                console.log(erro);
                reject('Não foi possivel obter a lista de pessoas cadastradas');
            });
        });
    }

}