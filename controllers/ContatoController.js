import { Contato, findAll, create, findByPk, destroy, update } from "../models/Contato.js";
class ContatoController {
    static getContatos(req, res) {
        res.json(findAll())
    }

    static createContato(req, res) {
        const { nome, email, telefone } = req.body
        if(!nome || !email || !telefone) {
            res.status(400).json({ error: 'Nome, email e telefone são obrigatórios' })
            return
        }

        const contato = new Contato(nome, email, telefone)
        create(contato)
        res.json(contato)
    }

    static getContatoById(req, res) {
        const id = parseInt(req.params.id)
        const contato = findByPk(id)
        if(!contato) {
            res.status(404).json({ error: 'Contato não encontrado' })
            return
        }
        res.json(contato)
    }

    static destroyContato(req, res) {
        const id = parseInt(req.params.id)
        const contato = findByPk(id)
        if(!contato) {
            res.status(404).json({ error: 'Contato não encontrado' })
            return
        }
        destroy(id)
        res.json({ message: 'Contato removido com sucesso' })
    }

static updateContato(req, res) {
    const id = parseInt(req.params.id)
    const contato = findByPk(id)
    if(!contato) {
        res.status(404).json({ error: 'Contato não encontrado' })
        return
    }

    const { nome, email, telefone } = req.body
    if(!nome || !email || !telefone) {
        res.status(400).json({ error: 'Nome, email e telefone são obrigatórios' })
        return
    }

    contato.nome = nome
    contato.email = email
    contato.telefone = telefone

    update(id, contato)
    res.json(contato)
}
}

export default ContatoController