const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log('username: ', username);
  console.log('password: ', password)


  if (username === 'usuario' && password === '123456') {
    console.log("logged correctly")
    res.json({ success: true, message: 'Inicio de sesión exitoso' });
  } else {
    res.status(401).json({ success: false, message: 'Credenciales inválidas' });
  }
});

app.listen(8081, () => {
  console.log(`Servidor en ejecución en http://localhost:8081`);
});
