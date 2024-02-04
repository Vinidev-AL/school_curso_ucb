const express = require('express')
const mysql = require('mysql')
const path = require('path')
const app = express()
const port = 3000


app.use(express.urlencoded())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbescola"
})

db.connect((error) => {
    if (error) {
      console.error('Erro ao conectar ao banco de dados:', error);
      return;
    }
    console.log('Conexão com o banco de dados MySQL estabelecida');
  });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/matricular', (req, res) => {
    console.log(req.body)
    const dados_da_matricula = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        email: req.body.email,
        telefone: req.body.telefone
    }

    console.log(`${dados_da_matricula.nome}`)

    const sql = 'INSERT INTO dados_matricula SET ?'

    db.query(sql, dados_da_matricula, (err, results) => {
        if (err) {
            console.error('Erro ao inserir dados no MySQL:', err);
            res.status(500).json({ erro: 'Erro ao inserir dados no servidor' });
            return;
        }

        console.log('Dados inseridos no MySQL com sucesso:', results);

        res.json({ mensagem: 'Dados inseridos no MySQL com sucesso!' });
    })

})

app.listen(port, () => {
    console.log(`O servidor está no ar na porta ${port}😎`)
})