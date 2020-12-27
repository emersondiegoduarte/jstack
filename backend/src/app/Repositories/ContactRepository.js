const {v4} = require('uuid');
const db = require('../database');
let contacts = [
  {
    id: v4(),
    name: "Melinda Monteiro",
    phone: "85999083536",
    email: "emerson.diego.duarte@gmail.com",
    sex:  "Female",
    age: 2,
    category_id: v4()
  }
];

class ContactRepository {

    async findAll(){
      const rows = await db.Query('select * from contacts')
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

    delete(id){
      return new Promise((resolve) => resolve(
        contacts = contacts.filter((contact)=> contact.id != id)

      ));
    }



    async create({name,  phone, email, sex, age, category_id}){
      const [rows] = await db.Query(`INSERT INTO CONTACTS(name,phone,email,sex,age,category_id)
      VALUES ($1,$2,$3,$4,$5,$6)
      RETURNING *
      `,[name,phone,email,sex,age,category_id]);
      return rows;
    }

    update(id, { name,  phone, email, sex, age, category_id}){
      return new Promise((resolve) => {
        const updatedContact = {
          id: id,
          name: name,
          phone: phone,
          email: email,
          sex: sex,
          age: age,
          category_id: category_id
        }
        contacts = contacts.map((contact) => (
          contact.id == id ? updatedContact: contact
        ));
        resolve(updatedContact);
      });
    }


}

module.exports = new ContactRepository();
