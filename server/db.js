const { Pool } = require("pg");
const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.DBPORT,
    database: "tododb"
});

module.exports = pool;
