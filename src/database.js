const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./brando_bike.db', (err) => {
    if (err) {
        console.error("Erro ao conectar no banco:", err.message);
    } else {
        console.log("Conectado ao SQLite!");
    }
});

// Criar tabela de estoque
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS estoque (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            item TEXT NOT NULL,
            quantidade INTEGER NOT NULL
        )
    `);

    // Inserir alguns dados iniciais (exemplo)
    db.run("INSERT INTO estoque (item, quantidade) VALUES ('Quadro MTB', 10)");
    db.run("INSERT INTO estoque (item, quantidade) VALUES ('Quadro Speed', 5)");
});

module.exports = db;