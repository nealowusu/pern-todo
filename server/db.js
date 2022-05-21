const Pool = require("pg").Pool;

const pool = new Pool({
  user: "nealowusu",
  host: "localhost",
  password: "47Ronin!",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
