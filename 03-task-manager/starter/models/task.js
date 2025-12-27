const mongoose = require("mongoose");

const TaksSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
}); // функция, которая создаёт структуры данных наших сущностей

module.exports = mongoose.model("Task", TaksSchema);
