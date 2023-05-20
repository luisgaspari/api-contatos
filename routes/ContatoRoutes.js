import express from 'express'
import ContatoController from '../controllers/ContatoController.js'

const router = express.Router();
router.get('/', ContatoController.getContatos)
router.post('/', ContatoController.createContato)
router.get('/:id', ContatoController.getContatoById)
router.delete('/:id', ContatoController.destroyContato)
router.put('/:id', ContatoController.updateContato)

export default router