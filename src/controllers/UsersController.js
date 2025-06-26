const { hash, compare } = require("bcryptjs");

const AppError = require("../utils/AppError");

const sqliteConnection = require("../database/sqlite");

class UsersController {
  async create(request, response) {
    try {
      const { name, email, password } = request.body;

      const database = await sqliteConnection();
      const checkUserExist = await database.get(
        "SELECT * FROM users WHERE email = (?)",
        [email]
      );

      if (checkUserExist) {
        throw new AppError("Este e-mail já está em uso!");
      }

      const hashedPassword = await hash(password, 8);
      const role = email.includes("admin") ? "admin" : "user";

      await database.run(
        "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
        [name, email, hashedPassword, role]
      );

      return response.status(201).json();
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = UsersController;
