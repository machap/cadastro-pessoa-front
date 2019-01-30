class Pessoa {
    constructor(id, nome, idade, email) {
        this._id = id;
        this._nome = nome;
        this._idade = idade;
        this._email = email;
    }

    get id() {
        return this._id;
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