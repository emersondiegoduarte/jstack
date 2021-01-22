const {Client} = require('pg');




const client = new Client({
  connectionString: process.env.DATABASE_URL,

});

client.connect();


exports.Query = async (q, values) => {
  const {rows} = await client.query(q,values);
  return rows;
}

