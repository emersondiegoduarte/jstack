const ContactRepository = require("../Repositories/ContactRepository");
class ContactController {

    async index(request,response){
        //Listar todos os registros
        const {orderBy} = request.query;
        const users = await ContactRepository.findAll(orderBy);
        response.status(200).json(users);
    }

    async show(request,response){
        //Listar um unico registro
        const {id} = request.params;
        const contact = await ContactRepository.findById(id);

        if(!contact){
          return response.status(404).json({message:"Contact not found"})
        }

        response.json(contact);
    }

    async store(request,response){
        const {name,  phone, email, sex, age, category_id} = request.body;
        const contactExists = await ContactRepository.findByEmail(email);

        if(!name){
          return response.status(400).json({message: "Name is required!"})
        }

        if(contactExists){
          return response.status(400).json({message: "Email already exists!"})
        }

        const contact = await ContactRepository.create({
          name,  phone, email, sex, age, category_id
        });

        response.status(200).json(contact)
    }

    async update(request,response){
       const {id} = request.params;
       const {name,  phone, email, sex, age, category_id} = request.body;

       const contactExists = await ContactRepository.findById(id);
       if(!contactExists){
         return response.status(404).json({message: "Contact not found"})
       }

       if(!name){
        return response.status(400).json({message: "Name is required!"})
       }

       const contactExistsEmail = await ContactRepository.findByEmail(email);
       console.log(contactExistsEmail)
       if(contactExistsEmail && contactExistsEmail.id != id){
         return response.status(404).json({message: "This email is in use!"})
       }

       const contact = await ContactRepository.update(id,{name, phone, email, sex, age, category_id})
       response.json(contact)
    }

    async delete(request,response){
      const {id} = request.params;
      await ContactRepository.delete(id);
      response.sendStatus(204);
    }
}

// Singleton
module.exports = new ContactController();
