const express = require('express');
const db = require('./database.js');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/estoque', (req, res) => {
    db.all("SELECT * FROM estoque", [], (err, rows) => {
        if (err) {
            res.status(500).send("Erro no banco!");
        } else {
            res.json(rows); // Retorna o estoque em JSON
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});