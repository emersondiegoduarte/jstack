const {v4} = require('uuid')
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

    findAll(){
      return new Promise((resolve) => resolve(contacts));
    }

    findById(id){
      return new Promise((resolve) => resolve(
        contacts.find((contact)=> contact.id == id)
      ));
    }

    findByEmail(email){
      return new Promise((resolve) => resolve(
        contacts.find((contact)=> contact.email == email)
      ));
    }

    delete(id){
      return new Promise((resolve) => resolve(
        contacts = contacts.filter((contact)=> contact.id != id)

      ));
    }



    create({name,  phone, email, sex, age, category_id}){
      return new Promise((resolve) => {
        const newContact = {
          id: v4(),
          name: name,
          phone: phone,
          email: email,
          sex: sex,
          age: age,
          category_id: category_id
        }
        contacts.push(newContact);
        resolve(newContact);
      });
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
