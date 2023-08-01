const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "david2468",
    host: "localhost",
    port: "5432",
    database: "tododb"
});

module.exports = pool;
