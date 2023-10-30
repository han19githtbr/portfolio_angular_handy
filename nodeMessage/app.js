const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const configMessage = require('./configMessage');

const app = express();
app.use(bodyParser.json());
app.use(cors())

app.post('/formulario', (req, res) => {
  configMessage(req.body);
  res.status(200).json({ message: 'Mensagem enviada corretamente' });
});

app.listen(3000, () => {
  console.log('Servidor rodando...')
});
