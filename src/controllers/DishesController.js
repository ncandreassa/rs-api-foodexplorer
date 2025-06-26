const knex = require("../database/knex");
const DiskStorage = require("../providers/DiskStorage");

class DishesController {
  async create(request, response) {
    try {
      
    const { name, category, price, description, ingredients } = request.body;
    const imageFile = request.file?.filename;

    const diskStorage = new DiskStorage();
    let savedImage = null;

    if (imageFile) {
      savedImage = await diskStorage.saveFile(imageFile);
    }

    let parsedIngredients;

    if (typeof ingredients === "string") {
      parsedIngredients = ingredients.split(",").map(item => item.trim());
    } else if (Array.isArray(ingredients)) {
      parsedIngredients = ingredients;
    } else {
      parsedIngredients = [];
    }

    await knex("dishes").insert({
      name,
      category,
      price: parseFloat(price).toFixed(2),
      description,
      ingredients: JSON.stringify(parsedIngredients),
      image: savedImage,
    });

    return response.status(201).json();
    } catch (error) {
      console.log(error)
    }
  }

  async show(request, response) {
    const { id } = request.params;

    const dish = await knex("dishes").where({ id }).first();

    return response.json(dish);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, description, price, ingredients, category } = request.body;

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
        category,
        ingredients: JSON.stringify(ingredients),
        updated_at: knex.fn.now(),
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

    let dishes;

    if (text) {
      const filterText = text.trim();

      dishes = await knex("dishes")
        .whereLike("name", `%${filterText}%`)
        .orWhereLike("ingredients", `%${filterText}%`)
        .orderBy("name");
    } else {
      dishes = await knex("dishes").orderBy("name");
    }
    return response.json(dishes);
  }
}

module.exports = DishesController;
