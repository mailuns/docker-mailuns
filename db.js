const { Pool } = require("pg");
const pool = new Pool({
    host: "postgres",
    port: 5432,
    user: "postgres",
    password: "postgres",
    database: "devdb",
});

module.exports = pool;
