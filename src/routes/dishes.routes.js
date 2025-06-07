const { Router } = require("express");

const multer = require("multer");
const uploadConfig = require("../configs/upload");

const DishesController = require("../controllers/DishesController");
const DishImageController = require("../controllers/DishImageController");

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const dishesRoutes = Router();

const upload = multer(uploadConfig.MULTER);

const dishesController = new DishesController();
const dishImageController = new DishImageController()

dishesRoutes.use(ensureAuthenticated);

dishesRoutes.post("/", dishesController.create);
dishesRoutes.get("/:id", dishesController.show);
dishesRoutes.put("/:id", dishesController.update);
dishesRoutes.delete("/:id", dishesController.delete);
dishesRoutes.get("/", dishesController.index);
dishesRoutes.patch("/image", ensureAuthenticated, upload.single("image"), dishImageController.update);

module.exports = dishesRoutes;
