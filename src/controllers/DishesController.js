const knex = require("../database/knex");

class DishesController {
  async create(request, response) {
    const { name, category, ingredients, price, description } = request.body;

    try {
      await knex("dishes").insert({
        name, 
        category, 
        ingredients: JSON.stringify(ingredients), 
        price,
        description,
      });
  
    } catch (error) {
      console.error(error)      
    }

    return response.json();
  }

  async show(request, response) {
    const { id } = request.params;

    const dish = await knex("dishes").where({ id }).first();

    return response.json(dish);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, description, price, ingredients } = request.body;
  
    const dish = await knex("dishes").where({ id }).first();
  
    if (!dish) {
      return response.status(404).json({ error: "Prato não encontrado." });
    }
  
    await knex("dishes")
      .where({ id })
      .update({
        name,
        description,
        price,
        ingredients: JSON.stringify(ingredients),
        updated_at: knex.fn.now()
      });
  
    return response.json({ message: "Prato atualizado com sucesso." });
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("dishes").where({ id }).delete();

    return response.json();
  }

  async index(request, response) {
    const { text } = request.query;
    let dishes = await knex("dishes")
      .whereLike("name", `%${text}%`)
      .orWhereLike("ingredients", `%${text}%`)
      .orderBy("name");

    return response.json(dishes);
  }
}

module.exports = DishesController;
