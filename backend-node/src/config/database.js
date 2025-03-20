const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Asegúrate de que la ruta sea absoluta
const dbPath = path.join(__dirname, "../../database/technical_test.sqlite");

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.error("Error al conectar SQLite:", err);
    else console.log("📦 Base de datos SQLite conectada");
});

// Crear tabla de usuarios si no existe
db.run(
    `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
    )`
);

module.exports = db;
