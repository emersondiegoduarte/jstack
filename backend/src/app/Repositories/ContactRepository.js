const {uuid} = require('uuidv4')
const contacts = [
  {
    id: uuid(),
    name: "Melinda Monteiro",
    sex:  "Female",
    age: 2,
    category_id: uuid()
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

}

module.exports = new ContactRepository();
