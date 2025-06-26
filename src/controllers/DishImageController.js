const knex = require("../database/knex");
const DiskStorage = require("../providers/DiskStorage");

class DishImageController {
  async update(request, response) {
    try {
      const dish_id = request.body.dishId;
      const imageFileName = request.file.filename;

      const diskStorage = new DiskStorage();

      const dish = await knex("dishes").where({ id: dish_id }).first();

      if (dish.image) {
        await diskStorage.deleteFile(dish.image);
      }

      const filename = await diskStorage.saveFile(imageFileName);
      dish.image = filename;

      await knex("dishes").update(dish).where({ id: dish_id });

      return response.json(dish);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = DishImageController;
