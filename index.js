import express from 'express';
import ContatoRoutes from './routes/ContatoRoutes.js';

const app = express();
app.use(express.json());

app.use('/contatos', ContatoRoutes);

app.listen(3000, () => console.log('API Rodando'));