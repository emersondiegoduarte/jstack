
const db = require('../database');

class ContactRepository {

    async findAll(orderBy = 'ASC'){
      const direction = orderBy.toUpperCase() == 'DESC' ? 'DESC' : 'ASC'
      const rows = await db.Query(`select co.*, ca.name as category_name from contacts co left join categories ca on co.category_id = ca.id order by co.name ${direction}`)
      return rows;
    }

    async findById(id){
      const [row] = await db.Query(`select * from contacts where id = $1`,[id])
      return row;
    }

    async findByEmail(email){
      const [row] = await db.Query(`select * from contacts where email = $1`,[email])
      return row;
    }

    async delete(id){
      const deleteOp = await db.Query(`delete from contacts where id = $1`, [id])
      return deleteOp;
    }



    async create({name,  phone, email, sex, age, category_id}){
      const [rows] = await db.Query(`INSERT INTO CONTACTS(name,phone,email,sex,age,category_id)
      VALUES ($1,$2,$3,$4,$5,$6)
      RETURNING *
      `,[name,phone,email,sex,age,category_id]);
      return rows;
    }

    async update(id, { name,  phone, email, sex, age, category_id}){
      const [row] = await db.Query(`
          UPDATE CONTACTS SET
          NAME = $1, PHONE = $2, EMAIL = $3, SEX = $4, AGE = $5, CATEGORY_ID = $6
          WHERE ID = $7
          RETURNING *
      `
      ,[name,  phone, email, sex, age, category_id,id]);
      return row;
    }


}

module.exports = new ContactRepository();
