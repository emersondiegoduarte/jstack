const {Client} = require('pg');


const client = new Client({
  host: process.env.DATABASE_URL || 'localhost',
  port: 5432,
  user: 'ssnoqgpxgsbasp',
  password: 'ed959aad93f2c397699e2b284899746f0dbad4f5598e3203f0e244b069dc4062',
  database: 'd27ieu3tc65cf6',
  ssl: true
});

client.connect();


exports.Query = async (q, values) => {
  const {rows} = await client.query(q,values);
  return rows;
}

