class ListaPessoas {
    constructor() {
        this._pessoas = [];
    }

    adiciona(pessoa) {
        this._pessoas.push(pessoa);
    }

    get pessoas() {
        return [].concat(this._pessoas);
    }
}