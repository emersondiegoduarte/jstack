const {Client} = require('pg');

const isProduction = process.env.DATABASE_URL ? true : false;

const client = new Client({
  connectionString: process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/mycontacts',
  ssl: isProduction ? { rejectUnauthorized: false } : false
});

client.connect();


exports.Query = async (q, values) => {
  const {rows} = await client.query(q,values);
  return rows;
}

