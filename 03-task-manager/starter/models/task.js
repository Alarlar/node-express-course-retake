const mongoose = require("mongoose");

const TaksSchema = new mongoose.Schema({
  name: {
    // Setting properties as objects
    type: String,
    required: [true, "must provide name"], // Validator, если нет имени, то в БД не создатся данные
    trim: true,
    maxlength: [20, "name cannot be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
}); // функция, которая создаёт структуры данных наших сущностей

module.exports = mongoose.model("Task", TaksSchema);
