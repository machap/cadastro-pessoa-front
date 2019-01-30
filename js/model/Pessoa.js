class Pessoa {
    constructor(nome, idade, email) {
        this._id = 0;
        this._nome = nome;
        this._idade = idade;
        this._email = email;
    }

    get nome() {
        return this._nome;
    }

    get idade() {
        return this._idade;
    }

    get email() {
        return this._email;
    }

}