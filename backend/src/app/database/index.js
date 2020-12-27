const {Client} = require('pg');


const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'mycontacts'
});

client.connect();


exports.Query = async (q, values) => {
  const {rows} = await client.query(q,values);
  return rows;
}

