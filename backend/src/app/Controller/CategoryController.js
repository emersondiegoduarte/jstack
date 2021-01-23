const CategoryRepository = require('../Repositories/CategoryRepository');

class CategoryController {
  async index(req, res){
      const categories = await CategoryRepository.findAll();
      res.json(categories);
  }

  async store(req, res){
      const {name} = req.body
      console.log(name)
      if(!name){
        res.status(400).json({message: 'Name is required'})
      }

      const category = await CategoryRepository.create({name});
      res.json(category);
  }

  async update(req, res){

  }

  async delete(req, res){

  }
}


module.exports = new CategoryController();
