const { findById } = require("../Repositories/ContactRepository");
const ContactRepository = require("../Repositories/ContactRepository");
class ContactController {

    async index(request,response){
        //Listar todos os registros
        const users = await ContactRepository.findAll();
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

    store(request,response){
        //Salvar um registro
    }

    update(request,response){
        //Atualizar
    }

    delete(request,response){

    }
}

// Singleton
module.exports = new ContactController();
