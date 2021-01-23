const db = require('../database')
class CategoryRepository {

  async findAll(){
      const rows = await db.Query('select * from categories order by name')
      return rows
  }

  async create({name}){
      const [row] = await db.Query(`insert into categories(name) values ($1) returning *`, [name]);
      return row;
  }

}

module.exports = new CategoryRepository()
