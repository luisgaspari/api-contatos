export class Contato {
    constructor(id, nome, email, telefone) {
        this.id = id
        this.nome = nome
        this.email = email
        this.telefone = telefone
    }
}

export const update = (id, contato) => {
    const contatoToUpdate = findByPk(id)
    if(!contatoToUpdate) {
        return false
    }

    const index = dbContato.indexOf(contatoToUpdate)
    dbContato[index] = contato
    return true
}

export const destroy = (id) => {
    const contato = findByPk(id)
    if(!contato) {
        return false
    }
    const index = dbContato.indexOf(contato)
    dbContato.splice(index, 1)
    return true
}

export const findByPk = (id) => {
    return dbContato.find(contato => contato.id === id)
}

export const create = (contato) => {
    contato.id = dbContato.length + 1
    dbContato.push(contato)
}

export const findAll = () => {
    return dbContato
}

export const dbContato = [
    new Contato(1, 'Fulano', 'email@email.com', '999'),
]